import { useTranslation } from "react-i18next";
import SocialLinks from "../../ui/SocialLinks";
import SideAreaImg from "../../../assets/images/latest-post-02.webp";
import { forwardRef } from "react";
import { HeaderSideBarProps } from "../../../types/types";
import { MdClose } from "react-icons/md";

const HeaderSideBar = forwardRef<HTMLElement, HeaderSideBarProps>(
  ({ isOpen, toggleMenu }, ref) => {
    const { t } = useTranslation();

    return (
      <article
        className={`latest-album z-10 ${isOpen ? "active" : ""}`}
        ref={ref}
      >
        <div className="flex items-center">
          <span
            title={t("navbar.closeButton")}
            onClick={toggleMenu}
            className="text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          >
            <MdClose />
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
    );
  }
);

export default HeaderSideBar;
