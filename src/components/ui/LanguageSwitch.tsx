import ReactCountryFlag from "react-country-flag";
import useLanguage from "../../hooks/useLanguage";

function LanguageSwitch() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <button
      onClick={changeLanguage}
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <ReactCountryFlag
        countryCode={currentLanguage === "es" ? "AR" : "US"}
        svg
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: "1",
        }}
        title={
          currentLanguage === "en" ? "Switch to Spanish" : "Cambiar a inglés"
        }
      />
    </button>
  );
}

export default LanguageSwitch;
