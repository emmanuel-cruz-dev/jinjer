import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { useEffect } from "react";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 rounded-full overflow-hidden"
    >
      <ReactCountryFlag
        countryCode={i18n.language === "en" ? "US" : "AR"}
        svg
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: "1",
        }}
        title={
          i18n.language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
        }
      />
    </button>
  );
};

export default LanguageSwitch;
