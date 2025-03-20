import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import useLanguage from "../../hooks/useLanguage";

function LanguageSwitch() {
  const { toggleLanguage } = useLanguage();
  const { i18n } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
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
}

export default LanguageSwitch;
