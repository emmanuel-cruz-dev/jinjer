import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import { useState, useEffect } from "react";
import Name from "./Name";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLatestAlbumOpen, setIsLatestAlbumOpen] = useState(false);
  const { t } = useTranslation();

  const toggleLatestAlbum = () => {
    setIsLatestAlbumOpen(!isLatestAlbumOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;

      if (window.scrollY > heroHeight) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 w-full flex transition-colors duration-300 z-10 h-20 lg:h-28 ${
        isScrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <article
        className={`latest-album z-10 ${isLatestAlbumOpen ? "active" : ""}`}
      >
        <div className="flex items-center">
          <span
            onClick={() => toggleLatestAlbum()}
            className="material-symbols-outlined text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          >
            close
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 px-4 text-center">
          <h2 className="text-2xl uppercase font-bold">Latest Album</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus
            risus mauris, et commodo lectus hendrerit ac.
          </p>
          <span className="text-2xl">
            <SocialLinks />
          </span>
        </div>
      </article>
      <nav
        className={`header__navbar ${
          isLatestAlbumOpen ? "translate-x" : ""
        }  flex justify-between items-center gap-4 uppercase mx-auto h-full px-8`}
      >
        <span
          onClick={() => toggleMenu()}
          className="material-symbols-outlined text-3xl lg:hidden cursor-pointer"
        >
          {isMenuOpen ? "close" : "menu"}
        </span>
        <span
          onClick={() => toggleLatestAlbum()}
          className="material-symbols-outlined hidden text-3xl lg:block cursor-pointer"
        >
          queue_music
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
