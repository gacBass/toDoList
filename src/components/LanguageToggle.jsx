import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const label = isMobile
    ? (i18n.language === 'en' ? '🇬🇧' : '🇪🇸')
    : (i18n.language === 'en' ? 'English' : 'Español');

  return (
    <div className="language-toggle-wrapper">
      <button onClick={toggleLanguage} className="language-toggle-btn" aria-label="Toggle language">
        {label}
      </button>
    </div>
  );
};

export default LanguageToggle;