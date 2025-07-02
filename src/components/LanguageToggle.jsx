import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css'; // Create this file for styles

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="language-toggle-wrapper">
      <button onClick={toggleLanguage} className="language-toggle-btn">
        {i18n.language === 'en' ? 'English' : 'Español'}
      </button>
    </div>
  );
};

export default LanguageToggle;