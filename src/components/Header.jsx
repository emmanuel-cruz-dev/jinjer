import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import { useState, useRef, useEffect } from "react";
import Name from "./Name";
import SocialLinks from "./SocialLinks";

import SideAreaImg from "../assets/images/sidearea-album.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLatestAlbumOpen, setIsLatestAlbumOpen] = useState(false);
  const latestAlbumRef = useRef(null);
  const { t } = useTranslation();

  const handleClickOutside = (event) => {
    if (
      latestAlbumRef.current &&
      !latestAlbumRef.current.contains(event.target)
    ) {
      setIsLatestAlbumOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLatestAlbum = () => {
    setIsLatestAlbumOpen(!isLatestAlbumOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header fixed top-0 left-0 w-full flex transition-colors duration-300 z-10 h-20 lg:h-28 ${
          isScrolled ? "bg-background" : "bg-transparent"
        }`}
      >
        <article
          className={`latest-album z-10 ${isLatestAlbumOpen ? "active" : ""}`}
          ref={latestAlbumRef}
        >
          <div className="flex items-center">
            <span
              onClick={() => toggleLatestAlbum()}
              className="material-symbols-outlined text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
            >
              close
            </span>
          </div>

          <div className="flex flex-col justify-around items-center px-4 text-center h-full">
            <h2 className="text-2xl uppercase font-bold">
              {t("navbar.albumTitle")}
            </h2>
            <p className="text-sm">{t("navbar.albumDescription")}.</p>
            <span className="text-2xl">
              <SocialLinks />
            </span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={SideAreaImg}
                alt="Portada del álbum Alucard"
                width="200"
                height="200"
              />
            </a>
            <span className="uppercase font-bold">© 2024 Nephews</span>
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

          <ul className="gap-6 hidden lg:flex">
            <li>
              <a href="#">{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#news">{t("navbar.news")}</a>
            </li>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#tour">{t("navbar.tour")}</a>
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
              <a href="#albums">{t("navbar.albums")}</a>
            </li>
            <li>
              <a href="#media">{t("navbar.media")}</a>
            </li>
            <li>
              <a href="#store">{t("navbar.store")}</a>
            </li>
            <li>
              <a href="#follow">{t("navbar.follow")}</a>
            </li>
          </ul>
          <div>
            <LanguageSwitch />
          </div>
        </nav>
      </header>
      <ul className={`header__menu-list ${isMenuOpen ? "active" : "hidden"}`}>
        <li>
          <a href="#" onClick={() => toggleMenu()}>
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#news" onClick={() => toggleMenu()}>
            {t("navbar.news")}
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => toggleMenu()}>
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="#tour" onClick={() => toggleMenu()}>
            {t("navbar.tour")}
          </a>
        </li>
        <li>
          <a href="#albums" onClick={() => toggleMenu()}>
            {t("navbar.albums")}
          </a>
        </li>
        <li>
          <a href="#media" onClick={() => toggleMenu()}>
            {t("navbar.media")}
          </a>
        </li>
        <li>
          <a href="#store" onClick={() => toggleMenu()}>
            {t("navbar.store")}
          </a>
        </li>
        <li>
          <a href="#follow" onClick={() => toggleMenu()}>
            {t("navbar.follow")}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
