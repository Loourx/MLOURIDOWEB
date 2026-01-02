import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

export default function Contact() {
  const { language } = useLanguage();
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-12 bg-black text-white border-t border-white/10 relative overflow-x-hidden"
    >
      {/* Scanline overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
           }} 
      />
      
      <div className="max-w-6xl mx-auto relative w-full">

        {/* Main content */}
        <div className="space-y-8 md:space-y-12">
          
          {/* Section label */}
          <div data-reveal className="flex items-center gap-2 md:gap-4">
            <span className="text-[9px] md:text-[10px] font-mono text-gray-700 whitespace-nowrap">05 // CONTACT</span>
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-[9px] md:text-[10px] font-mono text-gray-600 whitespace-nowrap">ONLINE</span>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="w-full">
              <h2 data-reveal className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold mb-2 tracking-tight">
                {getTranslation(language, 'contactTitle')}
              </h2>
              <p data-reveal className="text-[9px] md:text-[10px] font-mono text-gray-600 tracking-widest">
                SYSTEM_READY_FOR_INPUT
              </p>

              {/* Contact methods - Mobile: Buttons, Desktop: Full cards */}
              <div
                data-reveal
                data-reveal-delay="120ms"
                className="mt-6 md:mt-8 space-y-3 md:space-y-4 w-full"
              >
                {/* Email - Mobile optimized */}
                <a
                  href="mailto:mariolouridoregueira@gmail.com"
                  className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-[50ms] w-full max-w-full"
                >
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white/20 group-hover:border-white/40 transition-colors duration-[50ms]">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-white transition-colors duration-[50ms]" />
                    </div>
                    <div className="flex-1 min-w-0 md:hidden">
                      <span className="text-[9px] font-mono text-gray-600 block mb-0.5">EMAIL</span>
                      <span className="font-mono text-sm text-white truncate block">
                        mariolouridoregueira@gmail.com
                      </span>
                    </div>
                    <span className="md:hidden text-[9px] font-mono text-green-400 flex-shrink-0">
                      → SEND
                    </span>
                  </div>
                  <div className="hidden md:block flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-gray-600 block mb-1">PRIMARY_CHANNEL</span>
                    <span className="font-mono text-lg lg:text-xl text-white break-all">
                      mariolouridoregueira@gmail.com
                    </span>
                  </div>
                  <span className="hidden md:block text-[10px] font-mono text-gray-600 group-hover:text-green-400 transition-colors duration-75 flex-shrink-0">
                    → SEND
                  </span>
                </a>

                {/* LinkedIn - Mobile optimized */}
                <a
                  href="https://www.linkedin.com/in/mariolourido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-[50ms] w-full max-w-full"
                >
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white/20 group-hover:border-white/40 transition-colors duration-[50ms]">
                      <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-white transition-colors duration-[50ms]" />
                    </div>
                    <div className="flex-1 min-w-0 md:hidden">
                      <span className="text-[9px] font-mono text-gray-600 block mb-0.5">LINKEDIN</span>
                      <span className="font-mono text-sm text-white truncate block">
                        linkedin.com/in/mariolourido
                      </span>
                    </div>
                    <span className="md:hidden text-[9px] font-mono text-green-400 flex-shrink-0">
                      → CONNECT
                    </span>
                  </div>
                  <div className="hidden md:block flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-gray-600 block mb-1">PROFESSIONAL_NETWORK</span>
                    <span className="font-mono text-lg lg:text-xl text-white">
                      linkedin.com/in/mariolourido
                    </span>
                  </div>
                  <span className="hidden md:block text-[10px] font-mono text-gray-600 group-hover:text-green-400 transition-colors duration-75 flex-shrink-0">
                    → CONNECT
                  </span>
                </a>
              </div>

              {/* Location info */}
              <div
                data-reveal
                data-reveal-delay="180ms"
                className="mt-6 md:mt-8 flex flex-wrap items-center gap-2 md:gap-4 text-[9px] md:text-[10px] font-mono text-gray-500"
              >
                <span className="text-gray-700">LOC:</span>
                <span className="truncate">{getTranslation(language, 'contactLocation')}</span>
                <span className="text-gray-700 hidden md:inline">|</span>
                <span className="text-green-400/60 whitespace-nowrap">● REMOTE</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="flex justify-center py-6 md:py-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-[50ms]"
              >
                <div className="w-px h-6 md:h-8 bg-gradient-to-b from-gray-400 to-transparent group-hover:from-white transition-colors"></div>
                <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase group-hover:text-white transition-colors">
                  {getTranslation(language, 'backToTop')}
                </span>
              </button>
            </div>

            {/* Divider with technical markers */}
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-[8px] md:text-[9px] font-mono text-gray-700">EOF</span>
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[8px] md:text-[9px] font-mono text-gray-700 whitespace-nowrap">END</span>
            </div>

            {/* Footer */}
            <footer
              data-reveal
              data-reveal-delay="260ms"
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-[9px] md:text-[10px] font-mono text-gray-600"
            >
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">DESIGNED_BY</span>
                <span className="text-gray-400 text-[8px] md:text-[10px]">{getTranslation(language, 'contactDesigned')}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">VERSION</span>
                <span className="text-gray-400">2025.1.0</span>
              </div>
              <div className="flex flex-col gap-1 col-span-2 md:col-span-1 md:text-right">
                <span className="text-gray-700">LICENSE</span>
                <span className="text-gray-400">{getTranslation(language, 'contactCopyright')}</span>
              </div>
            </footer>
          </div>
        </div>
        
        {/* Corner markers - hidden on mobile */}
        <div className="hidden md:block absolute bottom-0 right-0 text-[9px] font-mono text-gray-800">
          COORD_42.88_-8.54
        </div>
      </div>
    </section>
  );
}