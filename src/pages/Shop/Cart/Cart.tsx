import { FC, useId } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../../../hooks/useCart";
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
