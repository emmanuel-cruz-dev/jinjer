import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { ShopProductsProps } from "../types/types";

function useFilters() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("UseFilters debe ser usado dentro de FiltersProvider");
  }

  const { filters, setFilters } = context;

  const filterProducts = (products: ShopProductsProps[]) => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.color === "all" || product.color === filters.color) &&
        (filters.selectSort === "default" || product.sale == true)
      );
    });
    if (filters.selectSort === "rating") {
      return products.sort((a, b) => b.rating - a.rating);
    }

    return filteredProducts;
  };

  return { filters, filterProducts, setFilters };
}

export default useFilters;
