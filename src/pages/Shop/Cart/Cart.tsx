import { useId } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import TShirtImg from "../../../assets/images/shop-fire-skull.avif";

function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingCart />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src={TShirtImg} alt="Remera Fire Skull" />
            <div>
              <strong>TShirt</strong> - $35.99
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <MdRemoveShoppingCart />
        </button>
      </aside>
    </>
  );
}

export default Cart;
