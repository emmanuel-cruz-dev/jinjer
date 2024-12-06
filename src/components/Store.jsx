import { useTranslation } from "react-i18next";
import TShirt1 from "../assets/images/shop-afterlife-black.png";
import TShirt2 from "../assets/images/shop-bird-black.png";
import TShirt3 from "../assets/images/shop-bird-white.png";
import TShirt4 from "../assets/images/shop-official-logo-black.png";
import TShirt5 from "../assets/images/shop-official-logo-white.png";

const TShirtCard = ({ title, price, img }) => {
  return (
    <div className="relative">
      <figure className="">
        <img className="" src={img} alt="" />
      </figure>
      <div className="flex justify-around">
        <h3 className="font-bold">{title}</h3>
        <span className="text-gray-500">${price}</span>
      </div>
      <a
        href="#"
        className="absolute top-1/2 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold hover:text-white hover:bg-red-700 transition-colors duration-300"
      >
        Add to cart
      </a>
    </div>
  );
};

const Store = () => {
  const { t } = useTranslation();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-10 gap-y-12 w-full xl:w-11/12">
          <TShirtCard title="T-Shirt Afterlife" price="21.99" img={TShirt1} />
          <TShirtCard
            title="T-Shirt Bird of Hermes"
            price="18.69"
            img={TShirt2}
          />
          <TShirtCard
            title="T-Shirt Bird of Hermes/W"
            price="24.79"
            img={TShirt3}
          />
          <TShirtCard
            title="T-Shirt Official Logo"
            price="23.95"
            img={TShirt4}
          />
          <TShirtCard
            title="T-Shirt Official Logo/W"
            price="23.95"
            img={TShirt5}
          />
        </div>
        <a href="#" className="red__btn">
          {t("store.amazonButton")}
        </a>
      </article>
    </section>
  );
};

export default Store;
