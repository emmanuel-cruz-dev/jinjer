import { useTranslation } from "react-i18next";
import useScrollDisplay from "../../hooks/useScrollDisplay";
import { scrollToTop } from "../../utils/utils";
import { FaChevronUp } from "react-icons/fa6";

function ScrollToTopButton() {
  const { isVisible, progress } = useScrollDisplay();
  const { t } = useTranslation();

  return (
    <button
      className={`up-btn fixed bottom-6 right-6 lg:right-8 z-50 hover:bg-black text-white rounded-full cursor-pointer transition-all duration-300 w-14 h-14 flex justify-center items-center ${
        isVisible ? "opacity-100" : "opacity-0"
      } focus:outline-none focus:ring-0 focus:ring-offset-0`}
      onClick={scrollToTop}
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
      <span className="text-3xl rounded-full z-10">
        <FaChevronUp />
      </span>
    </button>
  );
}

export default ScrollToTopButton;
