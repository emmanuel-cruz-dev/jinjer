import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.color === "all" || product.color === filters.color)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}

export default useFilters;
