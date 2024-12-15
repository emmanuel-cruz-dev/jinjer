import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TShirt1 from "../assets/images/shop-skull.png";
import TShirt2 from "../assets/images/shop-gorilla.png";
import TShirt3 from "../assets/images/shop-sharks.png";
import TShirt4 from "../assets/images/shop-fire.png";
import TShirt5 from "../assets/images/shop-death.png";
import TShirt6 from "../assets/images/shop-tour.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TShirtCard = ({ title, price, img }) => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-6">
      <figure className="">
        <img className="" src={img} alt="" />
      </figure>
      <div className="flex justify-around">
        <h3 className="font-bold">{title}</h3>
        <span className="text-gray-500">${price}</span>
      </div>
      <a
        href="#"
        className="absolute top-2/3 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold hover:text-white hover:bg-red-700 transition-colors duration-300"
      >
        {t("store.addToCart")}
      </a>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: false, // Mostrar puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 4, // Cantidad de elementos visibles
    slidesToScroll: 2, // Cantidad de elementos que se mueven por transición
    autoplay: false, // Activar desplazamiento automático
    arrows: false, // Mostrar flechas
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "12px" }}>
      <Slider
        {...settings}
        className="store__custom-slider"
        lazyLoad="ondemand"
      >
        <div>
          {/* Card 1 */}
          <TShirtCard title="Skull" price="21.99" img={TShirt1} />
        </div>

        <div>
          {/* Card 2 */}
          <TShirtCard title="Gorilla" price="18.69" img={TShirt2} />
        </div>

        <div>
          {/* Card 3 */}
          <TShirtCard title="Pisces" price="24.79" img={TShirt3} />
        </div>

        <div>
          {/* Card 4 */}
          <TShirtCard title="Noha" price="23.95" img={TShirt4} />
        </div>
        <div>
          {/* Card 5 */}
          <TShirtCard title="True Believer" price="23.95" img={TShirt5} />
        </div>
        <div>
          {/* Card 6 */}
          <TShirtCard title="Tour '18" price="19.99" img={TShirt6} />
        </div>
      </Slider>
    </div>
  );
};

const Store = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToSection = () => {
    navigate("/shop/");

    setTimeout(() => {
      const section = document.getElementById("store");
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  return (
    <section
      className="scroll-top-margin store py-16 mx-auto bg-slate-200 text-black"
      id="store"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            <span>{t("store.titleSpan")}</span> {t("store.title")}
          </h2>
          <p className="text-lg">{t("store.description")}</p>
        </div>
        <div className="w-screen">
          <Carousel />
        </div>
        <a onClick={() => goToSection()} href="/shop/" className="red__btn">
          {t("store.storeButton")}
        </a>
      </article>
    </section>
  );
};

export default Store;
