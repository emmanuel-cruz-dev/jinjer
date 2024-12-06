import { useTranslation } from "react-i18next";

const VideoCard = ({ video, title, paragraph, views }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center flex-col gap-4 border border-slate-500 p-5">
      <iframe
        className="grow w-full md:w-72 xl:w-80"
        width="320"
        height="220"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
      ></iframe>
      <div className="flex flex-col gap-3 tracking-wide">
        <a
          href="#"
          className="uppercase font-bold text-lg line-clamp-1 hover:text-slate-400 transition-colors duration-300"
        >
          {title}
        </a>
        <p className="text-slate-400 line-clamp-3">{paragraph}</p>
        <a
          href="#"
          className="flex justify-between py-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors duration-300"
        >
          <span>
            <span>{views}</span> {t("media.views")}
          </span>
          <span>{t("media.watch")}</span>
        </a>
      </div>
    </div>
  );
};

const Media = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin media py-16 mx-auto" id="media">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            Multi<span>media</span>
          </h2>
          <p className="text-lg">{t("media.description")}.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-52 gap-y-12 w-full md:w-5/6">
          <VideoCard
            video={
              "https://www.youtube.com/embed/n_GFN3a0yj0?si=ZQ-1ic0dnGjxqqPQ"
            }
            title="AC/DC - Thunderstruck"
            paragraph={t("media.thunderstruck")}
            views="339M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/JU5LMG3WFBw?si=fVPXj-FKsBl3RFpx"
            }
            title="Queen - Hammer to Fall"
            paragraph={t("media.hammerToFall")}
            views="28M"
          />

          <VideoCard
            video={
              "https://www.youtube.com/embed/8SbUC-UaAxE?si=LVhwuo2AmHmZVavC"
            }
            title="Guns N' Roses - November Rain"
            paragraph={t("media.novemberRain")}
            views="225M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/a9eNQZbjpJk?si=KG1QnQPcEovxztWN"
            }
            title="Red Hot Chili Peppers - Around The World"
            paragraph={t("media.aroundTheWorld")}
            views="104M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/t365MuktYQs?si=APy6Jc1vy6qr8-jR"
            }
            title="David Bowie - Starman"
            paragraph={t("media.starman")}
            views="48M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/R8OOWcsFj0U?si=O7WO0kqj7AiiDgzS"
            }
            title="Muse - Undisclosed Desires"
            paragraph={t("media.undisclosedDesires")}
            views="121M"
          />
        </div>
      </article>
    </section>
  );
};

export default Media;
