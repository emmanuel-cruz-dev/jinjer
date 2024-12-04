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
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="about__text flex flex-col gap-6">
            <h3 className="text-4xl uppercase logo">
              About N<span>3</span>phews
            </h3>
            <div className="flex flex-col gap-4 text-[18px]">
              <span>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit…
              </span>
              <p>
                Vestibulum in facilisis lectus. Praesent sit amet urna pulvinar,
                gravida magna commodo, molestie purus. Cras laoreet vitae risus
                vel laoreet. Suspendisse dignissim efficitur urna nec elementum.
              </p>
              <p>
                Aenean id metus nec quam facilisis vulputate. Quisque sem
                mauris, tempor ac dui eget, fringilla luctus velit. Ut dignissim
                in diam a tincidunt. Curabitur id neque urna. Nulla laoreet mi
                sed neque efficitur ultrices.
              </p>
            </div>
          </div>
          <div className="about__video">
            <iframe
              width="640"
              height="480"
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
