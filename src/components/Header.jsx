import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import { useState, useEffect } from "react";
import Name from "./Name";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const viewporWidth = document.documentElement.clientWidth;
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;

      if (window.scrollY > heroHeight || viewporWidth < 624)
        setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 h-20 lg:h-28 ${
        isScrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <nav className="header__navbar flex justify-between items-center uppercase max-w-[1200px] mx-auto h-full px-8">
        <span
          onClick={() => toggleMenu()}
          className="material-symbols-outlined text-3xl"
        >
          {isMenuOpen ? "close" : "menu"}
        </span>

        <ul className={`header__menu-list ${isMenuOpen ? "active" : "hidden"}`}>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#latest-news" onClick={() => toggleMenu()}>
              {t("navbar.news")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.tour")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.albums")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.media")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.store")}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggleMenu()}>
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
        <ul className="gap-6 hidden lg:flex">
          <li>
            <a href="#">{t("navbar.home")}</a>
          </li>
          <li>
            <a href="#latest-news">{t("navbar.news")}</a>
          </li>
          <li>
            <a href="">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="">{t("navbar.tour")}</a>
          </li>
        </ul>

        <a
          className="text-3xl lg:text-5xl opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
          href="#"
        >
          <Name />
        </a>

        <ul className="gap-6 hidden lg:flex">
          <li>
            <a href="">{t("navbar.albums")}</a>
          </li>
          <li>
            <a href="">{t("navbar.media")}</a>
          </li>
          <li>
            <a href="">{t("navbar.store")}</a>
          </li>
          <li>
            <a href="">{t("navbar.follow")}</a>
          </li>
        </ul>

        <div>
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
