import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || i18n.language;
  });

  const changeLanguage = () => {
    const newLang = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
