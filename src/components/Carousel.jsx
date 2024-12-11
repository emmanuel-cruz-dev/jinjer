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
    title: "Artículo 1",
    content: "Contenido completo del artículo 1...",
  },
  {
    id: 2,
    title: "Artículo 2",
    content: "Contenido completo del artículo 2...",
  },
  {
    id: 3,
    title: "Artículo 3",
    content: "Contenido completo del artículo 3...",
  },
];

const ArticleCard = ({ image, title, date }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  return (
    <div className="latest-news__card flex flex-col w-[22rem] gap-3">
      <figure className="overflow-hidden">
        <img
          className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
          src={image}
          alt=""
        />
      </figure>
      <Link to="/newsblog">
        <h3 className="uppercase font-bold tracking-wide text-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
          {title}
        </h3>
      </Link>
      <p className="text-gray-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quaerat
        tempora. Expedita voluptatem maxime a!
      </p>
      <a
        className="uppercase hover:underline transition-all duration-300 ease-in-out"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
      <time className="text-sm uppercase" dateTime="2018-01-16">
        {date}
      </time>
    </div>
  );
};

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
        <div>
          {/* Card 1 */}
          <ArticleCard
            image={CardImg1}
            title="Neuer Song: Ein Naomi Hoffnung"
            date="9 Nov 2020"
          />
        </div>

        <div>
          {/* Card 2 */}
          <ArticleCard
            image={CardImg2}
            title="Neue Benjamin Ep in arbeit"
            date="11 Feb 2013"
          />
        </div>

        <div>
          {/* Card 3 */}
          <ArticleCard
            image={CardImg3}
            title="Zeitreise - Evolution von 96 July"
            date="3 Feb 2008"
          />
        </div>

        <div>
          {/* Card 4 */}
          <ArticleCard image={CardImg} date="16 Jan 2018" />
        </div>
        <div>
          {/* Card 5 */}
          <ArticleCard image={CardImg} date="16 Jan 2018" />
        </div>
        <div>
          {/* Card 6 */}
          <ArticleCard image={CardImg} date="16 Jan 2018" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
