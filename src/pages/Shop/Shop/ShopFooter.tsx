import useFilters from "../../../hooks/useFilters";

const ShopFooter = () => {
  const { filters } = useFilters();

  return (
    <footer>
      <h3>Footer Carrito</h3>
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
};

export default ShopFooter;
