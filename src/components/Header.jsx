import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import SocialLinks from "./SocialLinks";
import Name from "./Name";

import SideAreaImg from "../assets/images/latest-post-02.webp";

const Header = () => {
  const navigate = useNavigate();
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
      if (window.scrollY > 160) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToSection = (path, sectionId) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    if (isMenuOpen) toggleMenu();
  };

  const handleMenuAndNavigate = (sectionId) => {
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
        <article
          className={`latest-album z-10 ${isLatestAlbumOpen ? "active" : ""}`}
          ref={latestAlbumRef}
        >
          <div className="flex items-center">
            <span
              title={t("navbar.closeButton")}
              onClick={() => toggleLatestAlbum()}
              className="material-symbols-outlined text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
            >
              close
            </span>
          </div>

          <div className="flex flex-col justify-evenly items-center px-4 text-center h-full">
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
                loading="lazy"
              />
            </a>
            <div className="mt-3">
              <span className="uppercase font-extrabold text-lg">
                © Jinjer 2024
              </span>
            </div>
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

          <div className="hidden lg:block">
            <span
              onClick={() => toggleLatestAlbum()}
              title={t("navbar.albumTitle")}
              className="material-symbols-outlined hidden text-3xl lg:block cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              queue_music
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
              <a href="#news" onClick={() => goToSection("/", "news")}>
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
};

export default Header;
