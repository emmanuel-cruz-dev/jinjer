import { useTranslation } from "react-i18next";
import Name from "./Name";
import SocialIcons from "./SocialIcons";
import JinjerLogo from "../assets/icons/jinjer-logo.png";
import CDCover from "../assets/images/latest-post-02.jpg";
import TourPoster from "../assets/images/world-tour.jpg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-footer">
      <article className="flex flex-col lg:flex-row gap-10 justify-between xl:justify-around lg:items-center lg:px-20 py-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 w-full lg:w-44">
            <figure className="w-48 lg:w-32">
              <img className="footer__nephews-logo" src={JinjerLogo} alt="" />
            </figure>
            <div className="text-4xl lg:text-2xl">
              <Name />
            </div>
          </div>

          <div>
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col px-6 lg:px-0 md:flex-row justify-between gap-8 lg:gap-16">
          <div className="posts flex flex-col gap-4">
            <h3 className="footer__title">{t("footer.latestPosts")}</h3>
            <a
              href="#"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure>
                <img src={TourPoster} alt="" width={72} />
              </figure>
              <div className="flex flex-col justify-around h-full">
                <h4>{t("footer.bandOnTour")}</h4>
                <time>{t("footer.starts")}</time>
              </div>
            </a>

            <a href="#" className="flex gap-4 items-center">
              <figure>
                <img src={CDCover} alt="" width={72} />
              </figure>
              <div className="flex flex-col justify-around h-full">
                <h4>{t("footer.review")}</h4>
                <time>{t("footer.reviewDate")}</time>
              </div>
            </a>
          </div>

          <div className="bookings flex flex-col gap-4">
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

          <div className="record-labels flex flex-col gap-4">
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
                <a
                  className="footer__legal-links"
                  href="https://www.metallica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.epicrecords.com
                </a>
              </li>
              <li>
                <span>
                  <a
                    className="footer__legal-links"
                    href="https://jinjer-metal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sony Music Entertainment
                  </a>
                  .
                </span>
              </li>
              <li>
                <a
                  className="footer__legal-links"
                  href="https://demo.farost.net/backtorock/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plantilla Principal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-4 items-center p-8 xl:py-7 uppercase text-xs">
        <ul className="footer__list flex flex-col md:flex-row gap-6 text-center">
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
              Jinjer Fans Club®
            </a>
          </li>
        </ul>
        <p>
          © 2024 Jinjer. {t("footer.powered")}{" "}
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
};

export default Footer;
