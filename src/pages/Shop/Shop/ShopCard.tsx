import { FC } from "react";
import { ShopProductsProps } from "../../../types/types";
import { calculateDiscount } from "../../../utils/utils";
import StarRating from "../../../components/ui/StarRating";

const ShopCard: FC<ShopProductsProps> = ({
  id,
  name,
  rating,
  price,
  img,
  sale,
}) => {
  const discount = calculateDiscount(price);

  return (
    <article
      key={id}
      className="relative flex flex-col justify-center gap-1 mx-6 md:w-40"
    >
      {sale && (
        <span className="absolute top-0 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold">
          Sale!
        </span>
      )}
      <figure>
        <img
          src={img}
          alt="Remera negra de Jinjer con un logotipo en el centro"
          width="500"
          height="566"
          loading="lazy"
        />
      </figure>
      <h3 className="font-bold">{name}</h3>
      <StarRating rating={rating} />
      <div className="flex gap-3">
        <span className="text-gray-200">${price}</span>
        {sale && (
          <span className="text-gray-500 line-through">${discount}</span>
        )}
      </div>

      <button className="w-full bg-accent py-1 mt-4 text-white font-semibold hover:bg-accent/80 transition-colors duration-300">
        Add to cart
      </button>
    </article>
  );
};

export default ShopCard;
