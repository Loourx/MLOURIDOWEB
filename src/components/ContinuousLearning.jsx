import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

const seminars = [
  { key: 'seminar1', hours: '2H', year: '2025' },
  { key: 'seminar2', hours: '8H', year: '2025' },
  { key: 'seminar3', hours: '5H', year: '2025' },
  { key: 'seminar4', hours: '4H', year: '2025' },
  { key: 'seminar5', hours: '8H', year: '2025' },
  { key: 'seminar6', hours: '4H', year: '2025' },
  { key: 'seminar7', hours: '1.5H', year: '2025' },
  { key: 'seminar8', hours: '2H', year: '2025' },
  { key: 'seminar9', hours: '4H', year: '2025' },
  { key: 'seminar10', hours: '45H', year: '2025' },
  { key: 'seminar11', hours: '8H', year: '2025' },
  { key: 'seminar12', hours: '4H', year: '2025' },
  { key: 'seminar13', hours: '4H', year: '2024' },
  { key: 'seminar14', hours: '8H', year: '2023' },
];

export default function ContinuousLearning() {
  const { language } = useLanguage();
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("learning-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Calcular total de horas
  const totalHours = seminars.reduce((acc, s) => {
    const h = parseFloat(s.hours.replace('H', ''));
    return acc + h;
  }, 0);

  return (
    <section
      id="learning"
      className="px-6 md:px-12 py-24 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header técnico */}
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-gray-500">04 // LEARNING_LOG</span>
            <span className="text-gray-800">+</span>
            <span className="text-[10px] font-mono text-gray-700">[FORMACIÓN_CONTINUA]</span>
          </div>
          <span className="text-[10px] font-mono text-gray-700 hidden md:block">{seminars.length} ENTRIES</span>
        </div>

        {/* Título */}
        <h2
          data-reveal
          data-reveal-delay="120ms"
          className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-4"
        >
          {language === 'en' ? 'Continuous' : 'Aprendizaje'} <span className="text-gray-500">{language === 'en' ? 'Learning' : 'Continuo'}</span>
        </h2>
        
        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-12 text-[10px] font-mono text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">TOTAL_HOURS:</span>
            <span className="text-white">{totalHours}H</span>
          </div>
          <span className="text-gray-800">|</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">PERIOD:</span>
            <span className="text-white">2023-2025</span>
          </div>
          <span className="text-gray-800">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span className="text-green-400/80">ACTIVE</span>
          </div>
        </div>

        {/* Lista de seminarios */}
        <div className="border border-white/10">
          {/* Header de tabla */}
          <div className="hidden md:grid md:grid-cols-[1fr,100px,80px] gap-4 px-4 py-3 bg-white/5 border-b border-white/10 text-sm font-mono text-gray-300 uppercase tracking-widest">
            <span>COURSE_TITLE</span>
            <span className="text-right">DURATION</span>
            <span className="text-right">YEAR</span>
          </div>
          
          {seminars.map((item, index) => (
            <article
              key={item.key}
              ref={(el) => (itemsRef.current[index] = el)}
              className="learning-item group border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-75"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr,100px,80px] gap-2 md:gap-4 px-4 py-4 items-center">
                {/* Título y subtítulo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-gray-700 hidden md:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg font-mono text-gray-200 group-hover:text-white transition-colors duration-75">
                      {getTranslation(language, `${item.key}Title`)}
                    </p>
                  </div>
                  <p className="text-sm font-mono text-gray-600 mt-1 md:ml-8 leading-relaxed">
                    {getTranslation(language, `${item.key}Subtitle`)}
                  </p>
                </div>
                
                {/* Horas */}
                <div className="flex md:justify-end">
                  <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 md:bg-transparent md:px-0 md:py-0">
                    {item.hours}
                  </span>
                </div>
                
                {/* Año */}
                <div className="flex md:justify-end">
                  <span className="text-sm font-mono text-gray-600">
                    {item.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Footer técnico */}
        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono text-gray-700">
          <span>LOG_CONTINUOUS_LEARNING_V2.0</span>
          <span>LAST_UPDATE: 2025</span>
        </div>
      </div>
    </section>
  );
}

