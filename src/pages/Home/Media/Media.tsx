import { useTranslation } from "react-i18next";
import VideoCard from "./VideoCard";
import useVisibility from "../../../hooks/useVisibility";

function Media() {
  const { t } = useTranslation();
  const { isVisible, toggleVisibility } = useVisibility();

  return (
    <section className="scroll-top-margin media py-16 mx-auto" id="media">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            Multi<span>media</span>
          </h2>
          <p className="text-lg">{t("media.description")}.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-44 gap-y-12 w-full md:w-5/6">
          <VideoCard
            video={
              "https://www.youtube.com/embed/637ER6dlGDg?si=aEpuXwqMSITyNBYl?rel=0&modestbranding=1&playsinline=1"
            }
            title="Green Serpent (Official Video)"
            paragraph={t("media.greenSerpent")}
            views="1.5M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/SQNtGoM3FVU?si=E4vzKQxLpqDFZzrk?rel=0&modestbranding=1&playsinline=1"
            }
            title="Pisces (Live Session)"
            paragraph={t("media.pisces")}
            views="89M"
          />

          <VideoCard
            video={
              "https://www.youtube.com/embed/KJoPIgg17U4?si=hF3pOee2fA6haLkd?rel=0&modestbranding=1&playsinline=1"
            }
            title="I Speak Astronomy (Official Video)"
            paragraph={t("media.iSpeakAstronomy")}
            views="13M"
          />

          {isVisible && (
            <>
              <VideoCard
                video={
                  "https://www.youtube.com/embed/AiaOSGZTwtY?si=4MRl3gl0LEOMdhWg?rel=0&modestbranding=1&playsinline=1"
                }
                title="Vortex (Official Video)"
                paragraph={t("media.vortex")}
                views="5.9M"
              />
              <VideoCard
                video={
                  "https://www.youtube.com/embed/U6rv5qi8-8s?si=-b2VVP9febdjlYgI?rel=0&modestbranding=1&playsinline=1"
                }
                title="Who Is Gonna Be The One (Live)"
                paragraph={t("media.whoIsGonnaBeTheOne")}
                views="14M"
              />
              <VideoCard
                video={
                  "https://www.youtube.com/embed/DZ_WDLA9i7c?si=DiANW26qAS0gv6UZ?rel=0&modestbranding=1&playsinline=1"
                }
                title="Scissors (OFFICIAL MUSIC VIDEO)"
                paragraph={t("media.scissors")}
                views="4M"
              />
            </>
          )}
        </div>
        <button onClick={toggleVisibility} className="red__btn rounded-none">
          {isVisible ? t("media.seeLess") : t("media.seeMore")}
        </button>
      </article>
    </section>
  );
}

export default Media;
