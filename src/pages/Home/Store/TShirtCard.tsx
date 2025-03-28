import { useTranslation } from "react-i18next";
import { useCart } from "../../../hooks/useCart";
import { ShopCardProps } from "../../../types/types";

const TShirtCard = ({ product }: ShopCardProps) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  return (
    <article className="w-full relative lg:mx-auto">
      <figure className="max-w-64 mx-auto">
        <img
          className="w-full object-cover store__tshirt-img"
          src={product.img}
          width="500"
          height="566"
          alt={`Remera negra ${product.name}`}
          loading="lazy"
        />
      </figure>
      <div className="flex justify-around">
        <h3 className="font-bold">{product.name}</h3>
        <span className="text-gray-700">${product.price}</span>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="absolute top-2/3 right-24 lg:right-4 bg-red-600 px-2 py-1 text-sm text-white font-semibold rounded-none hover:text-white hover:bg-red-700 transition-colors duration-300"
      >
        {t("store.addToCart")}
      </button>
    </article>
  );
};

export default TShirtCard;
