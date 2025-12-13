import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

export default function Contact() {
  const { language } = useLanguage();
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-black text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Scanline overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
           }} 
      />
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Terminal header */}
        <div className="border border-white/20 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
            <span className="ml-4 text-[10px] font-mono text-gray-600">CONTACT_MODULE.exe</span>
          </div>
          
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-green-400">$</span>
              <span>init_connection --mode=professional</span>
            </div>
            <div className="text-gray-700 text-xs">
              [OK] Connection parameters loaded
            </div>
            <div className="text-gray-700 text-xs">
              [OK] Ready to receive input
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          
          {/* Section label */}
          <div data-reveal className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-gray-700">05 // CONTACT_PROTOCOL</span>
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-[10px] font-mono text-gray-600">STATUS: ONLINE</span>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 data-reveal className="text-4xl md:text-5xl font-mono font-bold mb-2 tracking-tight">
                {getTranslation(language, 'contactTitle')}
              </h2>
              <p data-reveal className="text-[10px] font-mono text-gray-600 tracking-widest">
                SYSTEM_READY_FOR_INPUT
              </p>

              {/* Contact methods as command options */}
              <div
                data-reveal
                data-reveal-delay="120ms"
                className="mt-8 space-y-4"
              >
                {/* Email */}
                <a
                  href="mailto:mariolouridoregueira@gmail.com"
                  className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-[50ms]"
                >
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 group-hover:border-white/40 transition-colors duration-[50ms]">
                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-[50ms]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-gray-600 block mb-1">PRIMARY_CHANNEL</span>
                    <span className="font-mono text-xl md:text-2xl text-white">
                      mariolouridoregueira@gmail.com
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 group-hover:text-green-400 transition-colors duration-75">
                    → SEND
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mariolourido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-[50ms]"
                >
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 group-hover:border-white/40 transition-colors duration-[50ms]">
                    <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-[50ms]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-gray-600 block mb-1">PROFESSIONAL_NETWORK</span>
                    <span className="font-mono text-xl md:text-2xl text-white">
                      linkedin.com/in/mariolourido
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 group-hover:text-green-400 transition-colors duration-75">
                    → CONNECT
                  </span>
                </a>
              </div>

              {/* Location info */}
              <div
                data-reveal
                data-reveal-delay="180ms"
                className="mt-8 flex items-center gap-4 text-[10px] font-mono text-gray-500"
              >
                <span className="text-gray-700">LOC:</span>
                <span>{getTranslation(language, 'contactLocation')}</span>
                <span className="text-gray-700">|</span>
                <span className="text-green-400/60">● AVAILABLE_FOR_REMOTE</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="flex justify-center py-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-[50ms]"
              >
                <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent group-hover:from-white transition-colors"></div>
                <span className="text-xs font-mono tracking-[0.3em] text-gray-400 uppercase group-hover:text-white transition-colors">
                  {getTranslation(language, 'backToTop')}
                </span>
              </button>
            </div>

            {/* Divider with technical markers */}
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-gray-700">EOF</span>
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[9px] font-mono text-gray-700">END_OF_TRANSMISSION</span>
            </div>

            {/* Footer */}
            <footer
              data-reveal
              data-reveal-delay="260ms"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] font-mono text-gray-600"
            >
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">DESIGNED_BY</span>
                <span className="text-gray-400">{getTranslation(language, 'contactDesigned')}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-700">VERSION</span>
                <span className="text-gray-400">2025.1.0</span>
              </div>
              <div className="flex flex-col gap-1 md:text-right">
                <span className="text-gray-700">LICENSE</span>
                <span className="text-gray-400">{getTranslation(language, 'contactCopyright')}</span>
              </div>
            </footer>
          </div>
        </div>
        
        {/* Corner markers */}
        <div className="absolute bottom-0 right-0 text-[9px] font-mono text-gray-800">
          COORD_42.88_-8.54
        </div>
      </div>
    </section>
  );
}