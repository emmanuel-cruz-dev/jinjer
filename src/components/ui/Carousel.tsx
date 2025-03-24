import { useTranslation } from "react-i18next";
import { newsArticles } from "../../data/newsArticles";
import useGoToSection from "../../hooks/useGoToSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";

function Carousel() {
  const { t } = useTranslation();
  const goToSection = useGoToSection();
  const swiperRef = useRef<SwiperType>();

  return (
    <div style={{ padding: "12px" }}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
      >
        {newsArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
          title="Previous"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
          title="Next"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
