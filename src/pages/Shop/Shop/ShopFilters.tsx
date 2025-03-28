import { useId } from "react";
import { useTranslation } from "react-i18next";
import useShopFilters from "../../../hooks/useShopFilters";

function ShopFilters() {
  const { t } = useTranslation();
  const minPriceFilterId = useId();
  const colorFilterId = useId();
  const sortFilterId = useId();
  const { filters, handleChangeMinPrice, handleChangeColor, handleChangeSort } =
    useShopFilters();

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
        id={sortFilterId}
        name="dropdown"
        value={filters.selectSort}
        aria-label="Shop order"
        className="p-2 rounded-sm text-gray-300 cursor-pointer"
        onChange={handleChangeSort}
      >
        <option key="default" value="default">
          {t("shop.default")}
        </option>
        <option key="sale" value="sale">
          {t("shop.sortSale")}
        </option>
        <option key="rating" value="rating">
          {t("shop.sortRating")}
        </option>
        <option key="price" value="price-low-high">
          {t("shop.sortLowHigh")}
        </option>
        <option key="price-desc" value="price-high-low">
          {t("shop.sortHighLow")}
        </option>
      </select>
    </section>
  );
}

export default ShopFilters;
