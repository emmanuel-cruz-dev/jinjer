import { FC } from "react";
import { useTranslation } from "react-i18next";

interface VideoCardProps {
  video: string;
  title: string;
  paragraph: string;
  views: string;
}

const VideoCard: FC<VideoCardProps> = ({ video, title, paragraph, views }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center flex-col gap-4">
      <iframe
        loading="lazy"
        className="grow w-full md:w-72 xl:w-[22rem]"
        width="320"
        height="220"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
      <div className="flex flex-col gap-3 tracking-wide">
        <a
          href="#"
          className="uppercase font-bold text-lg line-clamp-1 hover:text-slate-400 transition-colors duration-300"
        >
          {title}
        </a>
        <p className="text-slate-400 line-clamp-3">{paragraph}.</p>
        <a
          href="#"
          className="flex justify-between py-2 px-4 bg-slate-700 hover:bg-slate-800 transition-colors duration-300"
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

export default VideoCard;
