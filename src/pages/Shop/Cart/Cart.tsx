import { useId } from "react";
import TShirtImg from "../../../assets/images/shop-fire-skull.avif";

function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}></label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <img className="max-w-32" src={TShirtImg} alt="Remera Fire Skull" />
            <div>
              <strong>TShirt</strong> - $35.99
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>Clear Cart</button>
      </aside>
    </>
  );
}

export default Cart;
