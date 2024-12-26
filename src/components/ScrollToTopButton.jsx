import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newProgress = scrollTop / scrollHeight;
      setProgress(newProgress);

      if (newProgress > 0.03) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`up-btn fixed bottom-6 right-6 z-50 bg-colorTertiary hover:bg-black text-white rounded-full cursor-pointer transition-all duration-300 w-14 h-14 flex justify-center items-center ${
        isVisible ? "opacity-100" : "opacity-0"
      } focus:outline-none focus:ring-0 focus:ring-offset-0`}
      onClick={handleClick}
      title={t("goTopButton")}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          background: `conic-gradient(#fff ${progress * 360}deg, transparent ${
            progress * 360
          }deg, transparent 360deg)`,
        }}
      />
      <span className="text-5xl rounded-full material-symbols-outlined z-10">
        keyboard_arrow_up
      </span>
    </button>
  );
}

export default ScrollToTopButton;
