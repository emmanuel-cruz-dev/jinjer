import { calculateDiscount } from "../../../utils/utils";
import StarRating from "../../../components/ui/StarRating";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { ShopCardProps } from "../../../types/types";
import useShopCard from "../../../hooks/useShopCard";

const ShopCard: FC<ShopCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { isProductInCart, handleCartAction } = useShopCard(product);
  const discount = calculateDiscount(product.price);

  return (
    <article
      key={product.id}
      className="relative flex flex-col justify-center gap-1 mx-6 md:w-40"
    >
      {product.sale && (
        <span className="absolute top-0 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold z-[2]">
          {t("shop.sale")}
        </span>
      )}
      <figure>
        <img
          className="shop__img-shadow"
          src={product.img}
          alt="Remera negra de Jinjer con un logotipo en el centro"
          width="500"
          height="566"
          loading="lazy"
        />
      </figure>
      <h3 className="font-bold">{product.name}</h3>
      <StarRating rating={product.rating} />
      <div className="flex gap-3">
        <span className="text-gray-200">${product.price}</span>
        {product.sale && (
          <span className="text-gray-500 line-through">${discount}</span>
        )}
      </div>

      <button
        style={{ backgroundColor: isProductInCart ? "#000" : "" }}
        className="w-full bg-accent py-1 mt-4 text-white font-semibold hover:bg-accent/80 transition-colors duration-300"
        onClick={handleCartAction}
      >
        {isProductInCart ? t("shop.removeCart") : t("shop.addCart")}
      </button>
    </article>
  );
};

export default ShopCard;
