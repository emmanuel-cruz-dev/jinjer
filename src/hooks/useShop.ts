import { ChangeEvent, useState } from "react";
import { ShopProductsProps, UseShopReturn } from "../types/types";

const useShop = (productsList: ShopProductsProps[]): UseShopReturn => {
  const [products, setProducts] = useState<ShopProductsProps[]>(productsList);
  const productsTotal = products.length;
  const shopProducts1 = products.slice(0, 12);
  const shopProducts2 = products.slice(12, 24);
  const scrollOptions: ScrollToOptions = {
    top: 0,
    behavior: "smooth",
  };
  const [filters, setFilters] = useState({
    color: "all",
    minPrice: 10,
    maxPrice: 50,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.color === "all" || product.color === filters.color)
      );
    });
  };

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const originalProducts = [...products];

    switch (selectedValue) {
      case "menu-order":
        setProducts(shopProducts1);
        break;
      case "rating":
        setProducts(
          [...shopProducts1].filter((product) => product.rating === 5)
        );
        break;
      case "sale":
        setProducts(
          [...shopProducts1].filter((product) => product.sale === true)
        );
        break;
      case "price":
        setProducts([...shopProducts1].sort((a, b) => a.price - b.price));
        break;
      case "price-desc":
        setProducts([...shopProducts1].sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts(originalProducts);
        break;
    }
  };

  const handleColor = (color: string) => {
    const selectedValue = color;
    const originalProducts = [...products];

    switch (selectedValue) {
      case "all":
        setProducts(originalProducts);
        break;
      case "red":
        setProducts(
          [...shopProducts2].filter((product) => product.color === "red")
        );
        break;
      case "blue":
        setProducts(
          [...shopProducts2].filter((product) => product.color === "blue")
        );
        break;
      case "yellow":
        setProducts(
          [...shopProducts2].filter((product) => product.color === "yellow")
        );
        break;
      default:
        setProducts(originalProducts);
        break;
    }
  };

  const handleProducts = () => {
    window.scrollTo(scrollOptions);
    if (products === shopProducts1) {
      setProducts(shopProducts2);
    } else {
      setProducts(shopProducts1);
    }
  };

  const handleArr = (num: number) => {
    window.scrollTo(scrollOptions);
    if (num === 1) {
      setProducts(shopProducts1);
    } else {
      setProducts(shopProducts2);
    }
  };

  return {
    products,
    shopProducts1,
    shopProducts2,
    productsTotal,
    handleFilter,
    handleColor,
    handleProducts,
    handleArr,
  };
};

export default useShop;
