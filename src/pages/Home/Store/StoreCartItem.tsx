import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../hooks/useCart";
import { useTranslation } from "react-i18next";
import useStoreNavigation from "../../../hooks/useStoreNavigation";

const StoreCartItem = () => {
  const { t } = useTranslation();
  const { totalProductsInCart, cart } = useCart();
  const isProductInCart = totalProductsInCart();
  const goToSection = useStoreNavigation();
  console.log(cart);

  return (
    <article className="absolute top-0 right-0">
      {isProductInCart != 0 && (
        <a
          onClick={goToSection}
          href="/shop/"
          className="bg-black text-white flex justify-center items-center hover:bg-red-500 hover:text-white text-xl w-14 h-14 rounded-full border-none focus:outline-none transition-colors duration-300 ease-in-out"
          title={t("store.storeButton")}
        >
          <FaShoppingCart />
          <span className="absolute -bottom-4 -left-3 bg-white text-base text-black font-bold flex justify-center items-center w-8 h-8 rounded-full">
            {totalProductsInCart()}
          </span>
        </a>
      )}
    </article>
  );
};

export default StoreCartItem;
