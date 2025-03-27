import { FC, useId } from "react";
import { FaShoppingCart } from "react-icons/fa";
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
    <li>
      <img className="max-w-16 mx-auto" src={img} alt={name} />
      <div>
        <strong>{name}</strong> - ${price}
      </div>
      <footer>
        <button onClick={subtractProduct}>-</button>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

function Cart() {
  // const cartCheckboxId = useId();
  const { t } = useTranslation();
  const { cart, clearCart, subtractProduct, addToCart } = useCart();

  return (
    <>
      {/* <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingCart />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden /> */}
      {cart.length == 0 && (
        <div>
          <h2 className="font-bold text-lg mb-1">{t("shop.cart")}</h2>
          <p>{t("shop.cartMessage")}</p>
        </div>
      )}
      <aside className="cart">
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
          <button onClick={clearCart} title="Clear Cart">
            <MdRemoveShoppingCart />
          </button>
        )}
      </aside>
    </>
  );
}

export default Cart;
