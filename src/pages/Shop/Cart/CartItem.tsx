import { FC } from "react";
import { CartItemProps } from "../../../types/types";

const CartItem: FC<CartItemProps> = ({
  img,
  price,
  name,
  quantity,
  subtractProduct,
  addToCart,
}) => {
  return (
    <li className="w-full flex justify-between px-2">
      <img
        className="object-cover max-w-16 shop__img-shadow"
        src={img}
        alt={name}
        width={500}
        height={566}
        loading="lazy"
      />
      <div className="text-right">
        <div className="mb-2 text-sm">
          <strong>{name}</strong> - ${price}
        </div>
        <footer className="flex justify-end">
          <button className="square__btn" onClick={subtractProduct}>
            -
          </button>
          <strong>{quantity}</strong>
          <button className="square__btn" onClick={addToCart}>
            +
          </button>
        </footer>
        <p className="mt-2 text-sm">
          Subtotal: ${(price * (quantity ?? 0)).toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default CartItem;
