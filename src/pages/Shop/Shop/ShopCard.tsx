import { FC } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { ShopProductsProps } from "../../../types/types";

const ShopCard: FC<ShopProductsProps> = ({
  id,
  name,
  rating,
  price,
  img,
  sale,
}) => {
  const discount = (price * 1.5).toFixed(2);
  const totalStars = 5;

  // Crea un array dinámico para representar las estrellas
  const stars = Array.from({ length: totalStars }, (_, index) =>
    index < rating ? (
      <FaStar key={index} color="#ffc107" />
    ) : (
      <FaRegStar key={index} color="#e4e5e9" />
    )
  );

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
      <div className="flex gap-1">{stars}</div>
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
