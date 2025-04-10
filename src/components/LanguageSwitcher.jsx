import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { uk, sk } from "../assets"; // Import flag assets

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Access i18n instance
  const [language, setLanguage] = useState(i18n.language); // Track current language

  // Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "sk" : "en";
    i18n.changeLanguage(newLanguage); // Change language in i18n
    setLanguage(newLanguage); // Update state
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-[32px] h-[20px] flex-shrink-0 saturate-0 hover:saturate-100 transition-all ease-in-out duration-300"
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
