import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLang = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
