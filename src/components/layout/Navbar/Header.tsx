import { MdQueueMusic, MdClose, MdMenu } from "react-icons/md";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../../ui/LanguageSwitch";
import Name from "../../ui/Name";
import useScroll from "../../../hooks/useScroll";
import useClickOutside from "../../../hooks/useClickOutside";
import useMenu from "../../../hooks/useMenu";
import useLatestAlbum from "../../../hooks/useLatestAlbum";
import HeaderSideBar from "./HeaderSideBar";
import useGoToSection from "../../../hooks/useGoToSection";

function Header() {
  const isScrolled = useScroll(160);
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isLatestAlbumOpen, toggleLatestAlbum, setIsLatestAlbumOpen } =
    useLatestAlbum();
  const latestAlbumRef = useRef(null);
  const { t } = useTranslation();
  const goToSection = useGoToSection();

  useClickOutside(latestAlbumRef, () => setIsLatestAlbumOpen(false));

  const handleMenuAndNavigate = (sectionId: string) => {
    goToSection("/", sectionId);
    toggleMenu();
  };

  return (
    <>
      <header
        className={`header fixed top-0 left-0 w-full flex transition-colors duration-300 z-10 h-20 lg:h-28 ${
          isScrolled ? "bg-background" : "bg-transparent"
        }`}
      >
        <HeaderSideBar
          isOpen={isLatestAlbumOpen}
          toggleMenu={toggleLatestAlbum}
          ref={latestAlbumRef}
        />
        <nav
          className={`header__navbar ${
            isLatestAlbumOpen ? "translate-x" : ""
          }  flex justify-between items-center gap-4 uppercase mx-auto h-full px-8`}
        >
          <span
            onClick={() => toggleMenu()}
            className="text-3xl lg:hidden cursor-pointer"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </span>

          <div className="hidden lg:block">
            <span
              onClick={() => toggleLatestAlbum()}
              title={t("navbar.albumTitle")}
              className="hidden text-3xl lg:block cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <MdQueueMusic />
            </span>

            <div
              className={`navbar__overlay ${isLatestAlbumOpen ? "active" : ""}`}
            ></div>
          </div>

          <ul className="gap-6 hidden lg:flex flex-1 justify-center">
            <li>
              <a href="#" onClick={() => goToSection("/", "home")}>
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a href="#news-section" onClick={() => goToSection("/", "news")}>
                {t("navbar.news")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => goToSection("/", "about")}>
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a href="#tour" onClick={() => goToSection("/", "tour")}>
                {t("navbar.tour")}
              </a>
            </li>
          </ul>
          <a
            className="text-3xl lg:text-5xl opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            href="#"
          >
            <Name />
          </a>
          <ul className="gap-6 hidden lg:flex flex-1 justify-center">
            <li>
              <a href="#albums" onClick={() => goToSection("/", "albums")}>
                {t("navbar.albums")}
              </a>
            </li>
            <li>
              <a href="#media" onClick={() => goToSection("/", "media")}>
                {t("navbar.media")}
              </a>
            </li>
            <li>
              <a href="#store" onClick={() => goToSection("/", "store")}>
                {t("navbar.store")}
              </a>
            </li>
            <li>
              <a href="#follow" onClick={() => goToSection("/", "follow")}>
                {t("navbar.follow")}
              </a>
            </li>
          </ul>

          <div>
            <LanguageSwitch />
          </div>
        </nav>
      </header>
      <ul className={`header__menu-list ${isMenuOpen ? "active" : "hidden"}`}>
        <li>
          <a href="#" onClick={() => handleMenuAndNavigate("home")}>
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#news" onClick={() => handleMenuAndNavigate("news")}>
            {t("navbar.news")}
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleMenuAndNavigate("about")}>
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="#tour" onClick={() => handleMenuAndNavigate("tour")}>
            {t("navbar.tour")}
          </a>
        </li>
        <li>
          <a href="#albums" onClick={() => handleMenuAndNavigate("albums")}>
            {t("navbar.albums")}
          </a>
        </li>
        <li>
          <a href="#media" onClick={() => handleMenuAndNavigate("media")}>
            {t("navbar.media")}
          </a>
        </li>
        <li>
          <a href="#store" onClick={() => handleMenuAndNavigate("store")}>
            {t("navbar.store")}
          </a>
        </li>
        <li>
          <a href="#follow" onClick={() => handleMenuAndNavigate("follow")}>
            {t("navbar.follow")}
          </a>
        </li>
      </ul>
    </>
  );
}

export default Header;
