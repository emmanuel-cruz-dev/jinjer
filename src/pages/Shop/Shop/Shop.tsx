import { ChangeEvent, useState } from "react";
import Background from "../../../assets/images/gradient.avif";
import ShopCard from "./ShopCard";
import { shopProducts1, shopProducts2 } from "../../../data/shopProducts";
import { ShopProductsProps } from "../../../types/types";

function Shop() {
  const [products, setProducts] = useState<ShopProductsProps[]>(shopProducts1);
  const productsTotal = shopProducts1.length + shopProducts2.length;

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
      case "green":
        setProducts(
          [...shopProducts2].filter((product) => product.color === "green")
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
    const scrollOptions: ScrollToOptions = {
      top: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
    if (products === shopProducts1) {
      setProducts(shopProducts2);
    } else {
      setProducts(shopProducts1);
    }
  };

  const handleArr = (num: number) => {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
    if (num === 1) {
      setProducts(shopProducts1);
    } else {
      setProducts(shopProducts2);
    }
  };

  return (
    <section className="shop second-page" id="shop">
      <article className="py-10">
        <article className="relative w-full mt-20 lg:w-11/12 mb-12 bg-black/90 flex flex-col justify-center items-center mx-auto">
          <img
            className="absolute top-0 left-0 w-full h-24 object-cover bg-accent/60"
            src={Background}
            alt="Fondo degradado en tonos claros y oscuros"
            width="644"
            height="644"
            loading="lazy"
          />
          <div className="w-full py-8 px-4 lg:px-8 lg:p-8 z-[1]">
            <h2 className="text-3xl font-bold text-white">Shop</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full px-4 md:px-12 mt-8">
            <div className="flex flex-col justify-center items-center gap-2 w-full mx-auto lg:w-5/6">
              <div className="flex justify-between gap-4 w-full">
                <p className="text-sm text-gray-400">
                  Showing{" "}
                  {products === shopProducts1
                    ? "1 - 12"
                    : `13 - ${productsTotal}`}{" "}
                  of {productsTotal} results
                </p>
                <select
                  name="dropdown"
                  id="dropdown"
                  defaultValue="menu-order"
                  onChange={(e) => handleFilter(e)}
                  aria-label="Shop order"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  <option key="menu-order" value="menu-order">
                    Default Sorting
                  </option>
                  <option key="rating" value="rating">
                    Sort by Rating
                  </option>
                  <option key="sale" value="sale">
                    Sort by Sale
                  </option>
                  <option key="price" value="price">
                    Sort by Price: Low to High
                  </option>
                  <option key="price-desc" value="price-desc">
                    Sort by Price: High to Low
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 pt-8 pb-8 w-full">
                {products.map((product) => (
                  <ShopCard {...product} />
                ))}
              </div>
              <div className="flex justify-between items-center border border-gray-600 mb-8">
                {products === shopProducts2 && (
                  <a
                    onClick={handleProducts}
                    className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer"
                  >
                    chevron_left
                  </a>
                )}
                <a
                  onClick={() => handleArr(1)}
                  className={`${
                    products === shopProducts1 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  1
                </a>
                <a
                  onClick={() => handleArr(2)}
                  className={`${
                    products === shopProducts2 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  2
                </a>
                {products === shopProducts1 && (
                  <a
                    onClick={handleProducts}
                    className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer"
                  >
                    chevron_right
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-16 -order-1 lg:order-2 lg:grid-cols-1 lg:gap-8 lg:h-fit w-full lg:w-80">
              <div>
                <h2 className="font-bold text-lg mb-1">Cart</h2>
                <p>No products in the cart.</p>
              </div>

              <div>
                <h2 className="font-bold text-lg mb-1">Filter by Color</h2>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleColor("blue")}>
                        Blue
                        <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleColor("red")}>
                        Red
                        <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleColor("yellow")}>
                        Yellow
                        <span>(1)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Shop;
