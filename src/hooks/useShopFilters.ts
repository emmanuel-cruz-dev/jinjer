import { useContext, ChangeEvent } from "react";
import { FiltersContext } from "../context/filters";

const useShopFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useShopFilters debe ser usado dentro de FiltersProvider");
  }

  const { filters, setFilters } = context;

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleChangeColor = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  const handleChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      selectSort: event.target.value,
    }));
  };

  return {
    filters,
    handleChangeMinPrice,
    handleChangeColor,
    handleChangeSort,
  };
};

export default useShopFilters;
