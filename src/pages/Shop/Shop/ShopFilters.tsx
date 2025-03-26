import { useId, useContext } from "react";
import { FiltersContext } from "../../../context/filters";

function ShopFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const minPriceFilterId = useId();
  const colorFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeColor = (event) => {
    // setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  return (
    <section className="flex flex-col gap-4">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <br />
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={40}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="color">Filtro de Color</label>
        <br />
        <select name="" id={colorFilterId} onChange={handleChangeColor}>
          <option value="all">Todos</option>
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="yellow">Amarillo</option>
        </select>
      </div>
    </section>
  );
}

export default ShopFilters;
