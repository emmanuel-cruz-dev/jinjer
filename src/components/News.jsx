import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

const News = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin news bg-background py-16" id="news">
      <article className="flex flex-col justify-center items-center gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("news.title1")}
            <span>{t("news.titleSpan")}</span>
            {t("news.title2")}
          </h2>
          <p className="text-lg">{t("news.description")}</p>
        </div>

        <div className="latest-news__carousel">
          <Carousel />
        </div>
      </article>
    </section>
  );
};

export default News;
