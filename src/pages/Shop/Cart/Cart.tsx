import { MdRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../../hooks/useCart";
import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";

function Cart() {
  const { t } = useTranslation();
  const { cart, clearCart, subtractProduct, addToCart, shopTotalPrice } =
    useCart();

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
        <div className="mt-4">
          <strong className="text-xl">Total: ${shopTotalPrice()}</strong>
          <div className="w-full flex justify-between my-4">
            <button className="square__btn text-xs">{t("shop.buyNow")}</button>
            <button
              className="square__btn"
              onClick={clearCart}
              title={t("shop.clearCart")}
            >
              <MdRemoveShoppingCart />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Cart;
