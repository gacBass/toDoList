import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  // Show icon on mobile, text on desktop
  const isMobile = window.innerWidth <= 600;
  const label = isMobile
    ? (i18n.language === 'en' ? '🇪🇸' : '🇬🇧')
    : (i18n.language === 'en' ? 'Español' : 'English');

  return (
    <div className="language-toggle-wrapper">
      <button onClick={toggleLanguage} className="language-toggle-btn" aria-label="Toggle language">
        {label}
      </button>
    </div>
  );
};

export default LanguageToggle;