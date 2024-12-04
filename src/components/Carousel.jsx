import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import CardImg from "../assets/images/blog03.jpg";
import CardImg1 from "../assets/images/blog-card-01.jpg";
import CardImg2 from "../assets/images/blog-card-02.jpg";
import CardImg3 from "../assets/images/blog-card-03.jpg";

const Carousel = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false, // Mostrar puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 3, // Cantidad de elementos visibles
    slidesToScroll: 1, // Cantidad de elementos que se mueven por transición
    autoplay: false, // Activar desplazamiento automático
    arrows: true, // Mostrar flechas
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
      <Slider {...settings}>
        <div>
          {/* Card 1 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg1}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              9 Nov 2019
            </time>
          </div>
        </div>

        <div>
          {/* Card 2 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg2}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              11 Feb 2013
            </time>
          </div>
        </div>

        <div>
          {/* Card 3 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg3}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              3 Feb 2008
            </time>
          </div>
        </div>

        <div>
          {/* Card 4 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              16 Jan 2018
            </time>
          </div>
        </div>
        <div>
          {/* Card 5 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              16 Jan 2018
            </time>
          </div>
        </div>
        <div>
          {/* Card 6 */}
          <div className="latest-news__card flex flex-col w-[22rem] gap-3">
            <a href="#">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              quaerat tempora. Expedita voluptatem maxime a!
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
              16 Jan 2018
            </time>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
