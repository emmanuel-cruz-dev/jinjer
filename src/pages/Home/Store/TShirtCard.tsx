import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TShirtCardProps } from "../../../types/types";

const TShirtCard: FC<TShirtCardProps> = ({ title, price, img }) => {
  const { t } = useTranslation();

  return (
    <article className="w-full relative lg:mx-auto">
      <figure className="max-w-64 mx-auto">
        <img
          className="w-full object-cover store__tshirt-img"
          src={img}
          width="500"
          height="566"
          alt={`Remera negra ${title}`}
          loading="lazy"
        />
      </figure>
      <div className="flex justify-around">
        <h3 className="font-bold">{title}</h3>
        <span className="text-gray-700">${price}</span>
      </div>
      <a
        href="#"
        className="absolute top-2/3 right-24 lg:right-4 bg-red-600 px-2 py-1 text-sm text-white font-semibold hover:text-white hover:bg-red-700 transition-colors duration-300"
      >
        {t("store.addToCart")}
      </a>
    </article>
  );
};

export default TShirtCard;
