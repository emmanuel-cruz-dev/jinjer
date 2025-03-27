import { createContext, useState } from "react";
import {
  CartContextType,
  CartItemProps,
  CartProviderProps,
} from "../types/types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const subtractProduct = (product: CartItemProps) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);

      if (newCart[productInCartIndex].quantity === 1) {
        removeFromCart(product);
      }

      if (newCart[productInCartIndex].quantity > 1) {
        newCart[productInCartIndex].quantity -= 1;
        return setCart(newCart);
      }
    }
  };

  const addToCart = (product: CartItemProps) => {
    // Checkear si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // Si el producto no está en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product: CartItemProps) => {
    setCart((prevState) => prevState.filter((item) => item.id != product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        subtractProduct,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
