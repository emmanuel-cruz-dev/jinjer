import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import microfono from "../assets/icons/microfono.png";
import guitarra from "../assets/icons/guitarra.png";
import bajo from "../assets/icons/bajo-electrico.png";
import bateria from "../assets/icons/bateria.png";
import Tatiana from "../assets/images/tatiana.webp";
import Roman from "../assets/images/roman.webp";
import Eugene from "../assets/images/eugene.webp";
import Vlad from "../assets/images/vlad.webp";

const MemberArticle = ({ image, icon, name, instrument, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToSection = (path, sectionId) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  return (
    <a
      href={`/members/${id}`}
      onClick={() => goToSection(`/members/`, `${id}`)}
      className="about__members__article"
      title={t("news.seeDetails")}
    >
      <div className="about__members__image-container">
        <figure className="about__members__logo-container">
          <img
            className="about__members__logo-image"
            width="300"
            height="300"
            src={icon}
            alt="Instrumento musical"
          />
        </figure>
        <img
          className="about__members__image"
          width="300"
          height="300"
          src={image}
          alt={`${name}`}
          title={`${name}`}
        />
      </div>
      <div className="flex flex-col items-center">
        <h4>{instrument}</h4>
        <h5>{name}</h5>
      </div>
    </a>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin about bg-slate-200 py-16 mx-auto"
      id="about"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 xl:w-[86%] text-black mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            <span>{t("about.title1")}</span> {t("about.title2")}
          </h2>
          <p className="text-lg">{t("about.description")}.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 xl:gap-6">
          <div className="about__text flex flex-col gap-4 w-full xl:w-4/6">
            <h3 className="text-4xl uppercase logo">
              {t("about.paragraphTitle")} Ji<span>nj</span>er
            </h3>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-[18px]">
                {t("about.paragraph1")}...
              </span>
              <p>{t("about.paragraph2")}.</p>
              <p>{t("about.paragraph3")}.</p>
            </div>
          </div>
          <div className="about__video w-full">
            <iframe
              className="w-full"
              width="680"
              height="440"
              src="https://www.youtube.com/embed/B48xIcvgzYM?si=2H2C59TYlcnHn1l4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className="about__members flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap justify-around items-center gap-12 w-full py-14">
          {/* Vocalista y Bajista */}
          <MemberArticle
            image={Tatiana}
            icon={microfono}
            name="Tatiana Shmaylyuk"
            instrument={t("about.tatiana")}
            id="1"
          />

          {/* Guitarrista */}
          <MemberArticle
            image={Roman}
            icon={guitarra}
            name="Roman Ibramkhalilov"
            instrument={t("about.roman")}
            id="2"
          />

          {/* Bajista */}
          <MemberArticle
            image={Eugene}
            icon={bajo}
            name="Eugene Abdiukhanov"
            instrument={t("about.eugene")}
            id="3"
          />

          {/* Baterista */}
          <MemberArticle
            image={Vlad}
            icon={bateria}
            name="Vlad Ulasevich"
            instrument={t("about.vlad")}
            id="4"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
