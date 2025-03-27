import { useId, useContext, ChangeEvent } from "react";
import { FiltersContext } from "../../../context/filters";
import { useTranslation } from "react-i18next";

function ShopFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { t } = useTranslation();
  const minPriceFilterId = useId();
  const colorFilterId = useId();

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

  return (
    <section className="flex gap-4">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
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

      <div className="flex">
        <label htmlFor={colorFilterId}>{t("shop.filterColor")}</label>
        <select name="" id={colorFilterId} onChange={handleChangeColor}>
          <option value="all">{t("shop.all")}</option>
          <option value="red">{t("shop.red")}</option>
          <option value="blue">{t("shop.blue")}</option>
          <option value="yellow">{t("shop.yellow")}</option>
        </select>
      </div>
    </section>
  );
}

export default ShopFilters;
