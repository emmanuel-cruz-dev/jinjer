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
        (filters.selectSort !== "sale" || product.sale == true)
      );
    });
    if (filters.selectSort === "rating") {
      return filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (filters.selectSort === "price-low-high") {
      return filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (filters.selectSort === "price-high-low") {
      return filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return { filters, filterProducts, setFilters };
}

export default useFilters;
