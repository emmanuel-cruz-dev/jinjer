import { ShopProductsProps } from "../types/types";
import { useCart } from "./useCart";

const useShopCard = (product: ShopProductsProps) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product: ShopProductsProps) => {
    return cart.some((item) => item.id === product.id);
  };

  const isProductInCart = checkProductInCart(product);

  const handleCartAction = () => {
    if (isProductInCart) {
      removeFromCart(product);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return {
    isProductInCart,
    handleCartAction,
  };
};

export default useShopCard;
