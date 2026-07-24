import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'EN', name: 'English (US)' },
  { code: 'FR', name: 'Français' },
  { code: 'IT', name: 'Italiano' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'AR', name: 'العربية' },
  { code: 'ZH', name: '中文' },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs tracking-widest font-mono text-titanium-dark hover:text-white transition-colors py-1 px-2.5 rounded-lg border border-white/5 hover:border-copper/30 bg-black/40"
      >
        <Globe className="w-3.5 h-3.5 text-copper" />
        <span>{selectedLang.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-obsidian-card/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors flex items-center justify-between ${
                selectedLang.code === lang.code
                  ? 'text-copper font-semibold bg-white/5'
                  : 'text-titanium-light hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{lang.name}</span>
              <span className="text-[10px] text-titanium-dark font-mono">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
