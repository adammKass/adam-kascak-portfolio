import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { uk, sk } from "../assets";
import styles from "../style";

// Button component for switching languages

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "sk" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`w-[32px] h-[20px] flex-shrink-0 saturate-0 hover:saturate-100 transition-all ease-in-out duration-300 ${styles.focus} ${styles.cursorPointer}`}
    >
      <img
        src={language === "en" ? sk : uk}
        alt={language === "en" ? "Change to Slovak" : "Change to English"}
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default LanguageSwitcher;
