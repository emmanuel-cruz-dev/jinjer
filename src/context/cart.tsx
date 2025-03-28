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

  const shopTotalPrice = (): string => {
    const subtotal = cart.map((product: CartItemProps) => {
      const quantity = product.quantity ?? 0;
      return product.price * quantity;
    });
    const total = subtotal.reduce((a, b) => a + b, 0);

    return total.toFixed(2);
  };

  const totalProductsInCart = (): number => {
    const subtotal = cart.map((product: CartItemProps) => {
      const quantity = product.quantity ?? 0;
      return quantity;
    });
    const total = subtotal.reduce((a, b) => a + b, 0);

    return total;
  };

  const subtractProduct = (product: CartItemProps) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);

      const productInCart = newCart[productInCartIndex];
      if (!productInCart) return;

      if (productInCart.quantity === 1) {
        removeFromCart(product);
      }

      if (productInCart.quantity && productInCart.quantity > 1) {
        productInCart.quantity -= 1;
        setCart(newCart);
      }
    }
  };

  const addToCart = (product: CartItemProps) => {
    // Checkear si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      const productInCart = newCart[productInCartIndex];

      if (!productInCart || productInCart.quantity == undefined) return;
      productInCart.quantity += 1;
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
        shopTotalPrice,
        totalProductsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
