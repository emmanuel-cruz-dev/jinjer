import { useTranslation } from "react-i18next";
import Name from "./Name";

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
              About N<span>3</span>phews
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
              src="https://www.youtube.com/embed/0_PUjfgfjmk?si=2E6stU4haVF7VbG4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="about__members"></div>
      </article>
    </section>
  );
};

export default About;
