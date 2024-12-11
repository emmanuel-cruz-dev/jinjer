import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardImg from "../assets/images/blog03.jpg";
import CardImg1 from "../assets/images/blog-card-01.jpg";
import CardImg2 from "../assets/images/blog-card-02.jpg";
import CardImg3 from "../assets/images/blog-card-03.jpg";

const articles = [
  {
    id: 1,
    title: "Neuer Song: Ein Naomi Hoffnung",
    image: CardImg1,
    date: "February 23,2023",
    description:
      "Naomi, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
  {
    id: 2,
    title: "Neue Benjamin Ep in arbeit",
    image: CardImg2,
    date: "February 11,2013",
    description:
      "Benjita, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
  {
    id: 3,
    title: "Zeitreise - Evolution von 96 July",
    image: CardImg3,
    date: "February 3,2008",
    description:
      "July, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
  {
    id: 4,
    title: "Song 4: Ein Naomi Hoffnung",
    image: CardImg1,
    date: "February 23,2023",
    description:
      "Naomi, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
  {
    id: 5,
    title: "Neue 5 Benjamin Ep in arbeit",
    image: CardImg2,
    date: "February 11,2013",
    description:
      "Benjita, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
  {
    id: 6,
    title: "Zeitreise #06 - Evolution von July",
    image: CardImg3,
    date: "February 3,2008",
    description:
      "July, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat tempora. Expedita voluptatem maxime a!",
  },
];

const ArticleCard = () => {};

const div = () => {};
const Carousel = () => {
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
            <div
              key={article.id}
              className="latest-news__card flex flex-col w-[22rem] gap-3"
            >
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={article.image}
                  alt=""
                />
              </figure>
              <Link to="/newsblog">
                <h3 className="uppercase font-bold tracking-wide text-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {article.title}
                </h3>
              </Link>
              <p className="text-gray-400">{article.description}</p>
              <div className="flex flex-col gap-2">
                <a
                  className="uppercase hover:underline transition-all duration-300 ease-in-out"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
                <time className="text-sm uppercase" dateTime="2018-01-16">
                  {article.date}
                </time>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
