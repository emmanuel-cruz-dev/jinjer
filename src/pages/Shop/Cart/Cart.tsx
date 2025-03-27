import { useId } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../../hooks/useCart";

function CartItem({ img, price, title, quantity, subtractProduct, addToCart }) {
  return (
    <li>
      <img className="max-w-20 mx-auto" src={img} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <button onClick={subtractProduct}>-</button>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, subtractProduct, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingCart />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
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

        <button onClick={clearCart} title="Clear Cart">
          <MdRemoveShoppingCart />
        </button>
      </aside>
    </>
  );
}

export default Cart;
