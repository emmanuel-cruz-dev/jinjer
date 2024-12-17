import { FaStar, FaRegStar } from "react-icons/fa6";
import { useState } from "react";
import TShirt1 from "../assets/images/shop-skull.png";
import TShirt2 from "../assets/images/shop-gorilla.png";
import TShirt3 from "../assets/images/shop-sharks.png";
import TShirt4 from "../assets/images/shop-fire.png";
import TShirt5 from "../assets/images/shop-death.png";
import TShirt6 from "../assets/images/shop-tour.png";
import TShirt7 from "../assets/images/shop-embryo.png";
import TShirt8 from "../assets/images/shop-queen.png";
import TShirt9 from "../assets/images/shop-clock.png";
import TShirt10 from "../assets/images/shop-microverse.png";
import TShirt11 from "../assets/images/shop-retrospection.png";
import TShirt12 from "../assets/images/shop-fire-skull.png";
import TShirt13 from "../assets/images/shop-butterfly.png";
import TShirt14 from "../assets/images/shop-butterfly-roja.png";
import TShirt15 from "../assets/images/shop-clock-amarilla.png";
import TShirt16 from "../assets/images/shop-clock-azul.png";
import TShirt17 from "../assets/images/shop-clock-roja.png";
import TShirt18 from "../assets/images/shop-fire-skull-roja.png";
import TShirt19 from "../assets/images/shop-logo-azul.png";

import Background from "../assets/images/gradient.png";

const products1 = [
  {
    id: 1,
    img: TShirt1,
    name: "Perennial/Red",
    rating: 5,
    price: 20.99,
    sale: true,
    color: "red",
  },
  {
    id: 2,
    img: TShirt2,
    name: "Ape/Blue",
    rating: 4,
    price: 25.99,
    color: "blue",
  },
  {
    id: 3,
    img: TShirt3,
    name: "Pisces/Blue",
    rating: 5,
    price: 15.99,
    sale: true,
    color: "blue",
  },
  { id: 4, img: TShirt4, name: "Noha", rating: 3, price: 30.99 },
  {
    id: 5,
    img: TShirt5,
    name: "True Believer",
    rating: 5,
    price: 30.99,
    sale: true,
  },
  {
    id: 6,
    img: TShirt6,
    name: "Cloud Factory",
    rating: 4,
    price: 16.99,
    sale: true,
  },
  { id: 7, img: TShirt7, name: "Embryo", rating: 3, price: 18.99 },
  {
    id: 8,
    img: TShirt8,
    name: "Queen of Everything",
    rating: 4,
    price: 15.99,
  },
  {
    id: 9,
    img: TShirt1,
    name: "Perennial",
    rating: 5,
    price: 20.99,
  },
  { id: 10, img: TShirt2, name: "Ape", rating: 4, price: 25.99, sale: true },
  {
    id: 11,
    img: TShirt3,
    name: "Pisces",
    rating: 5,
    price: 15.99,
    sale: true,
  },
  {
    id: 12,
    img: TShirt4,
    name: "Noha",
    rating: 3,
    price: 30.99,
    sale: false,
  },
];

const products2 = [
  {
    id: 9,
    img: TShirt9,
    name: "Clockwork",
    rating: 4,
    price: 20.99,
    sale: true,
  },
  {
    id: 10,
    img: TShirt10,
    name: "Microverse",
    rating: 4,
    price: 25.99,
    sale: true,
  },
  {
    id: 11,
    img: TShirt11,
    name: "Retrospection",
    rating: 5,
    price: 15.99,
    sale: true,
  },
  {
    id: 12,
    img: TShirt12,
    name: "Fire Skull",
    rating: 3,
    price: 30.99,
    sale: false,
  },
  {
    id: 13,
    img: TShirt13,
    name: "Butterfly",
    rating: 4,
    price: 18.99,
    sale: true,
  },
  {
    id: 14,
    img: TShirt14,
    name: "Butterfly Roja",
    rating: 4,
    price: 25.99,
    sale: true,
    color: "red",
  },
  {
    id: 15,
    img: TShirt15,
    name: "Clock Amarilla",
    rating: 5,
    price: 15.99,
    sale: true,
    color: "yellow",
  },
  {
    id: 16,
    img: TShirt16,
    name: "Clock Azul",
    rating: 3,
    price: 30.99,
    sale: false,
    color: "blue",
  },
  {
    id: 17,
    img: TShirt17,
    name: "Clock Roja",
    rating: 3,
    price: 30.99,
    sale: false,
    color: "red",
  },
  {
    id: 18,
    img: TShirt18,
    name: "Fire Skull Roja",
    rating: 3,
    price: 30.99,
    sale: false,
    color: "red",
  },
  {
    id: 19,
    img: TShirt19,
    name: "Logo Azul",
    rating: 5,
    price: 20.99,
    sale: true,
    color: "blue",
  },
];

const Shop = () => {
  const [products, setProducts] = useState(products1);
  const productsTotal = products1.length + products2.length;

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    const originalProducts = [...products];

    switch (selectedValue) {
      case "menu-order":
        setProducts(products1);
        break;
      case "rating":
        setProducts([...products1].filter((product) => product.rating === 5));
        break;
      case "sale":
        setProducts([...products1].filter((product) => product.sale === true));
        break;
      case "price":
        setProducts([...products1].sort((a, b) => a.price - b.price));
        break;
      case "price-desc":
        setProducts([...products1].sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts(originalProducts);
        break;
    }
  };

  const handleColor = (color) => {
    const selectedValue = color;
    const originalProducts = [...products];

    switch (selectedValue) {
      case "all":
        setProducts(originalProducts);
        break;
      case "red":
        setProducts(
          [...products1].filter((product) => product.color === "red")
        );
        break;
      case "blue":
        setProducts(
          [...products1].filter((product) => product.color === "blue")
        );
        break;
      case "green":
        setProducts(
          [...products1].filter((product) => product.color === "green")
        );
        break;
      case "yellow":
        setProducts(
          [...products1].filter((product) => product.color === "yellow")
        );
        break;
      default:
        setProducts(originalProducts);
        break;
    }
  };

  const handleProducts = () => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
    if (products === products1) {
      setProducts(products2);
    } else {
      setProducts(products1);
    }
  };

  const TShirtCard = ({ id, name, rating, price, img, sale }) => {
    const discount = (price * 1.5).toFixed(2);
    const totalStars = 5;

    // Crea un array dinámico para representar las estrellas
    const stars = Array.from({ length: totalStars }, (_, index) =>
      index < rating ? (
        <FaStar key={index} color="#ffc107" />
      ) : (
        <FaRegStar key={index} color="#e4e5e9" />
      )
    );

    return (
      <div
        key={id}
        className="relative flex flex-col justify-center gap-1 mx-6 w-40"
      >
        {sale && (
          <span className="absolute top-0 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold">
            Sale!
          </span>
        )}
        <figure>
          <img src={img} alt="" />
        </figure>
        <h3 className="font-bold">{name}</h3>
        <div className="flex gap-1">{stars}</div>
        <div className="flex gap-3">
          <span className="text-gray-200">${price}</span>
          {sale && (
            <span className="text-gray-500 line-through">${discount}</span>
          )}
        </div>

        <button className="w-full bg-accent py-1 mt-4 text-white font-semibold hover:bg-accent/80 transition-colors duration-300">
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <section className="shop second-page" id="shop">
      <article className="py-10">
        <article className="relative w-full mt-20 lg:w-11/12 mb-12 bg-black/90 flex flex-col justify-center items-center mx-auto">
          <img
            className="absolute top-0 left-0 w-full h-24 object-cover bg-accent/60"
            src={Background}
            alt=""
          />
          <div className="w-full px-12 p-8 z-[1]">
            <h2 className="text-3xl font-bold text-white">Archives: Shop</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full px-4 md:px-12 mt-8">
            <div className="flex flex-col justify-center items-center gap-2 w-full mx-auto lg:w-5/6">
              <div className="flex justify-between gap-4 w-full">
                <p className="text-sm text-gray-400">
                  Showing {products === products1 ? "1 - 12" : "13 - 20"} of{" "}
                  {productsTotal} results
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
                  <TShirtCard {...product} />
                ))}
              </div>
              <div className="flex justify-between items-center border border-gray-600 mb-8">
                {products === products2 && (
                  <a
                    onClick={handleProducts}
                    className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer"
                  >
                    chevron_left
                  </a>
                )}
                <a
                  onClick={handleProducts}
                  className={`${
                    products === products1 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  1
                </a>
                <a
                  onClick={handleProducts}
                  className={`${
                    products === products2 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  2
                </a>
                {products === products1 && (
                  <a
                    onClick={handleProducts}
                    className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer"
                  >
                    chevron_right
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-16 -order-1 lg:order-2 lg:grid-cols-1 lg:gap-8 lg:h-fit w-full lg:w-80">
              <div>
                <h2>Cart</h2>
                <p>No products in the cart.</p>
              </div>

              <div>
                <h2>Filter by Color</h2>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleColor("blue")}>
                        Blue
                        <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Gray</a>
                      <span>(3)</span>
                    </li>
                    <li>
                      <a href="#">Green</a>
                      <span>(4)</span>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleColor("red")}>
                        Red
                        <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Yellow</a>
                      <span>(6)</span>
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
};

export default Shop;
