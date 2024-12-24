import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardImg1 from "../assets/images/thumb-gs.webp";
import CardImg2 from "../assets/images/thumb-kafka.webp";
import CardImg3 from "../assets/images/thumb-rogue.webp";
import CardImg4 from "../assets/images/thumb-sd.webp";
import CardImg5 from "../assets/images/thumb-fn.webp";
import CardImg6 from "../assets/images/thumb-drum.webp";

const articles = [
  {
    id: 1,
    title: "Green Serpent",
    image: CardImg1,
    date: "26.11.2024",
    description: "1",
  },
  {
    id: 2,
    title: "Kafka",
    image: CardImg2,
    date: "10.09.2024",
    description: "2",
  },
  {
    id: 3,
    title: "Rogue",
    image: CardImg3,
    date: "10.09.2024",
    description: "3",
  },
  {
    id: 4,
    title: "Someone's Daughter",
    image: CardImg4,
    date: "01.08.2024",
    description: "3",
  },
  {
    id: 5,
    title: "Jinjer - From Nothing",
    image: CardImg5,
    date: "25.06.2024",
    description: "4",
  },
  {
    id: 6,
    title: "Jinjer - Drum Playthrough",
    image: CardImg6,
    date: "23.07.2024",
    description: "5",
  },
];

const Carousel = () => {
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

  const settings = {
    dots: false, // Mostrar puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 3, // Cantidad de elementos visibles
    slidesToScroll: 1, // Cantidad de elementos que se mueven por transición
    autoplay: false, // Activar desplazamiento automático
    arrows: true, // Mostrar flechas
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "12px" }}>
      <Slider {...settings} className="latest-news__carousel-slider">
        {articles.map((article) => {
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
};

export default Carousel;
