import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Configurar worker de PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const CustomPdfViewer = ({ pdfUrl, title, language, isFullscreen, onToggleFullscreen }) => {
  const canvasRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageRendering, setPageRendering] = useState(false);

  // Cargar PDF
  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setLoading(false);
      }
    };

    if (pdfUrl) {
      loadPdf();
    }
  }, [pdfUrl]);

  // Renderizar página
  useEffect(() => {
    const renderPage = async () => {
      if (!pdf || !canvasRef.current || pageRendering) return;

      try {
        setPageRendering(true);
        const page = await pdf.getPage(currentPage);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Calcular escala basada en el contenedor
        const container = canvas.parentElement;
        const containerWidth = container.clientWidth;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        // Configurar canvas
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // Renderizar
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
        setPageRendering(false);
      } catch (error) {
        console.error('Error rendering page:', error);
        setPageRendering(false);
      }
    };

    if (pdf) {
      renderPage();
    }
  }, [pdf, currentPage, pageRendering]);

  // Manejar redimensionamiento
  useEffect(() => {
    const handleResize = () => {
      if (pdf && !pageRendering) {
        // Forzar re-render con un pequeño delay
        setTimeout(() => {
          setPageRendering(false);
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pdf, pageRendering]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className={`relative w-full h-full bg-black ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Loading State */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/90"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-white/60 font-mono text-sm">
                {language === 'en' ? 'Loading PDF...' : 'Cargando PDF...'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Canvas */}
      <div className={`relative overflow-hidden ${isFullscreen ? 'h-full flex items-center justify-center' : 'aspect-[20/11]'}`}>
        <canvas
          ref={canvasRef}
          className={`max-w-full max-h-full object-contain ${isFullscreen ? '' : 'w-full h-full'}`}
          style={{ display: loading ? 'none' : 'block' }}
        />

        {/* Controles de navegación */}
        <AnimatePresence>
          {!loading && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Navegación anterior */}
              {currentPage > 1 && (
                <button
                  onClick={goToPrevPage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/70 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Navegación siguiente */}
              {currentPage < totalPages && (
                <button
                  onClick={goToNextPage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/70 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Barra de controles inferior */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20`}
          >
            {/* Indicador de página */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`w-8 h-8 rounded-full text-xs font-mono transition-all duration-200 ${
                    currentPage === i + 1
                      ? 'bg-white text-black'
                      : 'bg-transparent text-white/60 hover:text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Separador */}
            <div className="w-px h-6 bg-white/20"></div>

            {/* Botón fullscreen */}
            <button
              onClick={onToggleFullscreen}
              className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-white/20 hover:border-white/40 transition-colors duration-200 rounded"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 size={14} />
                  {language === 'en' ? 'Exit' : 'Salir'}
                </>
              ) : (
                <>
                  <Maximize2 size={14} />
                  {language === 'en' ? 'Full Screen' : 'Pantalla Completa'}
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomPdfViewer;