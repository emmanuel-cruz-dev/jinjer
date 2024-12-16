import TShirt1 from "../assets/images/shop-skull.png";
import TShirt2 from "../assets/images/shop-gorilla.png";
import TShirt3 from "../assets/images/shop-sharks.png";
import TShirt4 from "../assets/images/shop-fire.png";
import TShirt5 from "../assets/images/shop-death.png";
import TShirt6 from "../assets/images/shop-tour.png";
import TShirt7 from "../assets/images/shop-embryo.png";
import TShirt8 from "../assets/images/shop-queen.png";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Background from "../assets/images/gradient.png";

const stars = ({ num }) => {
  switch (num) {
    case 1:
      return (
        <>
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 2:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 3:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 4:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </>
      );
    case 5:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    default:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
  }
};

const Shop = () => {
  const products = [
    {
      id: 1,
      img: TShirt1,
      name: "Perennial",
      rating: 4,
      price: 20.99,
      sale: true,
    },
    { id: 2, img: TShirt2, name: "Ape", rating: 2, price: 25.99, sale: false },
    {
      id: 3,
      img: TShirt3,
      name: "Pisces",
      rating: 5,
      price: 15.99,
      sale: true,
    },
    { id: 4, img: TShirt4, name: "Noha", rating: 3, price: 30.99, sale: false },
    { id: 5, img: TShirt5, name: "True Believer", rating: 1, price: 40.99 },
    { id: 6, img: TShirt6, name: "Cloud Factory", rating: 4, price: 10.99 },
    { id: 7, img: TShirt7, name: "Embryo", rating: 2, price: 50.99 },
    {
      id: 8,
      img: TShirt8,
      name: "Queen of Everything",
      rating: 5,
      price: 5.99,
    },
  ];
  const TShirtCard = ({ name, rating, price, img, sale }) => {
    return (
      <div className="relative flex flex-col justify-center gap-1 mx-6 w-40">
        {sale && (
          <span className="absolute top-0 right-0 bg-red-600 px-2 py-1 text-sm text-white font-semibold">
            Sale!
          </span>
        )}
        <figure>
          <img src={img} alt="" />
        </figure>
        <h3 className="font-bold">{name}</h3>
        <div className="flex gap-1">{stars({ num: 5 })}</div>
        <div className="flex gap-3">
          <span className="text-gray-200">${price}</span>
          {sale && <span className="text-gray-500 line-through">$25.99</span>}
        </div>

        <button className="w-full bg-accent py-1 mt-4 text-white font-semibold hover:bg-accent/80 transition-colors duration-300">
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <section className="newsblog" id="shop">
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
                  Showing 1 - 12 of 20 results
                </p>
                <select
                  name="Dropdown"
                  id=""
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  <option value="Default Sorting">Default Sorting</option>
                  <option value="2">Sort by Popularity</option>
                  <option value="3">Sort by Average Rating</option>
                  <option value="4">Sort by Latest</option>
                  <option value="5">Sort by Price: Low to High</option>
                  <option value="6">Sort by Price: High to Low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 pt-8 pb-8 w-full">
                {products.map((product) => (
                  <TShirtCard {...product} />
                ))}
                {/* <TShirtCard sale />
                <TShirtCard />
                <TShirtCard sale />
                <TShirtCard sale />
                <TShirtCard />
                <TShirtCard sale />
                <TShirtCard />
                <TShirtCard sale />
                <TShirtCard sale />
                <TShirtCard />
                <TShirtCard sale />
                <TShirtCard /> */}
              </div>
              <div className="flex justify-between items-center border border-gray-600 mb-8">
                <a
                  href="#"
                  className="w-10 h-10 flex justify-center items-center bg-gray-400"
                >
                  1
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex justify-center items-center hover:bg-gray-400"
                >
                  2
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400"
                >
                  chevron_right
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-16 -order-1 lg:order-2 lg:grid-cols-1 lg:gap-8 lg:h-fit w-full lg:w-80">
              <div>
                <h2>Cart</h2>
                <p>No products in the cart.</p>
              </div>

              <div className="flex flex-col gap-4">
                <h2>Filter by price</h2>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value="200"
                    className="w-full h-2 appearance-none bg-gray-200 outline-none cursor-pointer"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                  <button className="w-full md:w-1/3 bg-accent py-1 text-white font-semibold hover:bg-accent/80 transition-colors duration-300">
                    Filter
                  </button>
                  <div>
                    <span>Price: </span>
                    <span>$20 - $1000</span>
                  </div>
                </div>
              </div>

              <div>
                <h2>Filter by</h2>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>
                      <a href="#">Blue</a>
                      <span>(2)</span>
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
                      <a href="#">Red</a>
                      <span>(5)</span>
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
