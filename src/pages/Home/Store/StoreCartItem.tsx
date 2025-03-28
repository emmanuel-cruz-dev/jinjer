import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../hooks/useCart";
import { useTranslation } from "react-i18next";

const StoreCartItem = () => {
  const { t } = useTranslation();
  const { totalProductsInCart } = useCart();
  const isProductInCart = totalProductsInCart();

  return (
    <article className="absolute top-0 right-0">
      {isProductInCart != 0 && (
        <button
          className="bg-black text-white text-3xl p-4 rounded-full border-none focus:outline-none"
          title={t("store.storeButton")}
        >
          <FaShoppingCart />
          <span className="absolute -bottom-4 -left-4 bg-white text-lg text-black font-bold flex justify-center items-center py-1 px-3 rounded-full">
            {totalProductsInCart()}
          </span>
        </button>
      )}
    </article>
  );
};

export default StoreCartItem;
