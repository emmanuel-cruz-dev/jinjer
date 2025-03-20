import goToSection from "../goToSection";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newsArticles } from "../../data/newsArticles";
import { carouselSettings } from "../../data/carouselSettings";

function Carousel() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "12px" }}>
      <Slider {...carouselSettings} className="latest-news__carousel-slider">
        {newsArticles.map((article) => {
          return (
            <div key={article.id} className="latest-news__card">
              <figure className="overflow-hidden mb-3">
                <img
                  className="object-cover scale-110 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={article.image}
                  width="500"
                  height="325"
                  alt={`Imagen del video ${article.title}`}
                  loading="lazy"
                />
              </figure>
              <time className="text-sm uppercase" dateTime={article.date}>
                {article.date}
              </time>
              <a
                className="flex w-fit"
                href={`/newsblog/${article.id}`}
                onClick={() => goToSection(`/newsblog/`, `${article.id}`)}
                title={t("news.seeDetails")}
              >
                <h3 className="uppercase font-bold tracking-wide text-lg opacity-80 hover:opacity-100 transition-opacity duration-300 mb-1">
                  {article.title}
                </h3>
              </a>
              <p className="text-gray-400 mb-3">
                {t(`news.text${article.description}`)}
              </p>
              <a
                className="w-fit uppercase text-sm font-semibold text-gray-400 hover:underline transition-all duration-300 ease-in-out"
                href={`/newsblog/${article.id}`}
                onClick={() => goToSection(`/newsblog/`, `${article.id}`)}
                title={t("news.seeDetails")}
              >
                {t("news.readMore")}
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
