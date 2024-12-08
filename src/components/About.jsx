import { useTranslation } from "react-i18next";
import microfono from "../assets/icons/microfono.png";
import guitarra from "../assets/icons/guitarra.png";
import bateria from "../assets/icons/bateria.png";
import Naomi from "../assets/images/naomi-aldana.jpg";
import July from "../assets/images/julian-andre.jpg";
import Benja from "../assets/images/benjamin-sebastian.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin about bg-white py-16 mx-auto"
      id="about"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 text-black mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            <span>{t("about.title1")}</span> {t("about.title2")}
          </h2>
          <p className="text-lg">{t("about.description")}.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="about__text flex flex-col gap-6 w-full xl:w-4/6">
            <h3 className="text-4xl uppercase logo">
              {t("about.paragraphTitle")} N<span>3</span>phews
            </h3>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-[18px]">
                {t("about.paragraph1")}...
              </span>
              <p>{t("about.paragraph2")}.</p>
              <p>{t("about.paragraph3")}.</p>
              <p>{t("about.paragraph4")}.</p>
            </div>
          </div>
          <div className="about__video w-full">
            <iframe
              className="w-full"
              width="680"
              height="440"
              src="https://www.youtube.com/embed/lDrkMNw6Wr0?si=DjFKM1ycU-a4c-QU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className="about__members flex flex-col lg:flex-row justify-around items-center gap-12 w-full py-14">
          {/* Vocalista y Bajista */}
          <article className="about__members__article">
            <div className="about__members__image-container">
              <img className="about__members__logo" src={microfono} alt="" />
              <img className="about__members__image" src={Naomi} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h4>{t("about.naomi")}</h4>
              <h5>Naomi Aldanna</h5>
            </div>
          </article>

          {/* Guitarrista */}
          <article className="about__members__article">
            <div className="about__members__image-container">
              <img className="about__members__logo" src={guitarra} alt="" />
              <img className="about__members__image" src={July} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h4>{t("about.july")}</h4>
              <h5>Julián André</h5>
            </div>
          </article>

          {/* Baterista */}
          <article className="about__members__article">
            <div className="about__members__image-container">
              <img className="about__members__logo" src={bateria} alt="" />
              <img className="about__members__image" src={Benja} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h4>{t("about.benja")}</h4>
              <h5>Benjamín Sebastían</h5>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default About;
