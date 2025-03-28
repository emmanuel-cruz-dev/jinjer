import { useId, useContext, ChangeEvent } from "react";
import { FiltersContext } from "../../../context/filters";
import { useTranslation } from "react-i18next";

function ShopFilters() {
  const { t } = useTranslation();
  const minPriceFilterId = useId();
  const colorFilterId = useId();
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters debe ser usado dentro de FiltersProvider");
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

  const handleSelectSorting = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      selectSort: event.target.value,
    }));
  };

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <label htmlFor={minPriceFilterId}>{t("shop.pricesFrom")}:</label>
        <input
          className="cursor-pointer lg:w-1/3"
          type="range"
          id={minPriceFilterId}
          min={0}
          max={40}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor={colorFilterId}>{t("shop.filterColor")}</label>
        <select
          className="p-2 rounded-sm text-gray-300 cursor-pointer"
          name=""
          id={colorFilterId}
          onChange={handleChangeColor}
        >
          <option value="all">{t("shop.all")}</option>
          <option value="red">{t("shop.red")}</option>
          <option value="blue">{t("shop.blue")}</option>
          <option value="yellow">{t("shop.yellow")}</option>
        </select>
      </div>

      <select
        name="dropdown"
        id="dropdown"
        defaultValue="menu-order"
        aria-label="Shop order"
        className="p-2 rounded-sm text-gray-300 cursor-pointer"
        onChange={handleSelectSorting}
      >
        <option key="menu-order" value="default">
          {t("shop.default")}
        </option>
        <option key="rating" value="rating">
          {t("shop.sortRating")}
        </option>
        <option key="sale" value="sale">
          {t("shop.sortSale")}
        </option>
        <option key="price" value="price">
          {t("shop.sortLowHigh")}
        </option>
        <option key="price-desc" value="price-desc">
          {t("shop.sortHighLow")}
        </option>
      </select>
    </section>
  );
}

export default ShopFilters;
