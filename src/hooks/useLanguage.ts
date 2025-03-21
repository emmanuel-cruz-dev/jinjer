import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    setCurrentLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    // if (savedLanguage) {
    //   i18n.changeLanguage(savedLanguage);
    // }

    // setCurrentLanguage(i18n.language);
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage).then(() => {
        setCurrentLanguage(savedLanguage);
      });
    } else {
      setCurrentLanguage(i18n.language);
    }
  }, [i18n]);

  return { currentLanguage, toggleLanguage };
};

export default useLanguage;
