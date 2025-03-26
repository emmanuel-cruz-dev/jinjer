import { useState } from "react";

function ShopFilters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <section className="flex flex-col gap-4">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <br />
        <input
          type="range"
          id="price"
          min={0}
          max={100}
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="color">Filtro de Color</label>
        <br />
        <select name="" id="color">
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
