import { useTranslation } from "react-i18next";
import Name from "../../ui/Name";
import SocialIcons from "../../ui/SocialIcons";
import JinjerLogo from "../../../assets/icons/jinjer-logo.png";
import CDCover from "../../../assets/images/latest-post-02.webp";
import TourPoster from "../../../assets/images/world-tour.webp";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-footer">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10 gap-6 px-8 pr-12 py-16 border-b border-gray-600 mx-auto">
        <div className="xl:col-span-3 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 lg:w-full">
            <figure className="w-28 lg:w-32">
              <img
                className="footer__nephews-logo"
                width="300"
                height="300"
                src={JinjerLogo}
                alt="Logo de Jinjer"
                loading="lazy"
              />
            </figure>
            <div className="text-4xl lg:text-2xl">
              <Name />
            </div>
          </div>

          <SocialIcons />
        </div>

        <div className="posts flex flex-col gap-4 xl:col-span-3">
          <h3 className="footer__title">{t("footer.latestPosts")}</h3>
          <a
            href="#"
            className="flex gap-4 items-center border-b border-gray-600 pb-4"
          >
            <figure className="w-[4.4rem]">
              <img
                className="w-full"
                src={TourPoster}
                alt="Poster del tour mundial de Jinjer"
                width="300"
                height="300"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-col justify-around h-full">
              <h4>{t("footer.bandOnTour")}</h4>
              <time>{t("footer.starts")}</time>
            </div>
          </a>
          <a href="#" className="flex gap-4 items-center">
            <figure className="w-[4.4rem]">
              <img
                className="w-full"
                src={CDCover}
                alt="Portada del álbum Duel"
                width="300"
                height="300"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-col justify-around h-full">
              <h4>{t("footer.review")}</h4>
              <time>{t("footer.reviewDate")}</time>
            </div>
          </a>
        </div>

        <div className="bookings flex flex-col gap-4 xl:col-span-2">
          <h3 className="footer__title">{t("footer.bookings")}</h3>
          <ul>
            <li>Atlanta, GA 30342</li>
            <li>562 Sycamore Circle</li>
            <li>T:+920364426</li>
            <li>
              <a className="footer__legal-links" href="#">
                www.funstuff.com
              </a>
            </li>
            <li>Max Dogg Productions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 xl:col-span-2">
          <h3 className="footer__title">{t("footer.recordLabels")}</h3>
          <ul>
            <li>
              <a className="footer__legal-links" href="#">
                {" "}
                Why Music Matters
              </a>
            </li>

            <li>
              <a className="footer__legal-links" href="#">
                Fifth Member Fan Club
              </a>
            </li>
            <li>
              <a className="footer__legal-links" href="#">
                www.epicrecords.com
              </a>
            </li>
            <li>
              <span>
                <a className="footer__legal-links" href="#">
                  Sony Music Entertainment
                </a>
              </span>
            </li>
            <li>
              <a className="footer__legal-links" href="#">
                Napalm Records
              </a>
            </li>
          </ul>
        </div>
      </article>

      <article className="flex flex-col gap-4 items-center p-8 xl:py-7 uppercase text-xs">
        <ul className="footer__list flex flex-col md:flex-row gap-4 text-center">
          <li>
            <a className="footer__legal-links" href="#">
              {t("footer.privacy")}
            </a>
          </li>

          <li>
            <a className="footer__legal-links" href="#">
              {t("footer.terms")}
            </a>
          </li>
          <li>
            <a className="footer__legal-links" href="#">
              Fans Club®
            </a>
          </li>
          <li>
            <a
              className="footer__legal-links"
              href="https://jinjer-metal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jinjer Official
            </a>
          </li>
        </ul>
        <p>
          © 2024 Jinjer Band Website. {t("footer.powered")}{" "}
          <a
            className="footer__legal-links"
            target="_blank"
            rel="noopener noreferrer"
            title="Emmanuel Cruz's Portfolio"
            href="https://emmanuel-cruz.netlify.app/"
          >
            Emmanuel
          </a>
        </p>
      </article>
    </footer>
  );
}

export default Footer;
