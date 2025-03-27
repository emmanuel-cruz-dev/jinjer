import { FC } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../../hooks/useCart";
import { CartItemProps } from "../../../types/types";
import { useTranslation } from "react-i18next";

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
      <img className="max-w-16 shop__img-shadow" src={img} alt={name} />
      <div className="w-full flex flex-col items-end lg:items-center gap-2">
        <div>
          <strong>{name}</strong> - ${price}
        </div>
        <footer>
          <button className="square__btn" onClick={subtractProduct}>
            -
          </button>
          <strong>{quantity}</strong>
          <button className="square__btn" onClick={addToCart}>
            +
          </button>
        </footer>
      </div>
    </li>
  );
};

function Cart() {
  const { t } = useTranslation();
  const { cart, clearCart, subtractProduct, addToCart } = useCart();

  return (
    <aside className="cart">
      <h2 className="font-bold text-lg">{t("shop.cart")}</h2>
      {cart.length == 0 && <p>{t("shop.cartMessage")}</p>}
      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            subtractProduct={() => subtractProduct(product)}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
      </ul>
      {cart.length !== 0 && (
        <div className="w-full flex justify-center my-4">
          <button
            className="square__btn"
            onClick={clearCart}
            title={t("shop.clearCart")}
          >
            <MdRemoveShoppingCart />
          </button>
        </div>
      )}
    </aside>
  );
}

export default Cart;
