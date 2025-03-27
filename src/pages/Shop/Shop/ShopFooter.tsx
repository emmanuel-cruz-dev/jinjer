import { useCart } from "../../../hooks/useCart";
import useFilters from "../../../hooks/useFilters";

const ShopFooter = () => {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer>
      {/* <h3>Footer Carrito</h3> */}
      {JSON.stringify(filters, null, 2)}
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  );
};

export default ShopFooter;
