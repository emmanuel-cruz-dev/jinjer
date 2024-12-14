import TShirt1 from "../assets/images/shop-skull.png";

const Shop = () => {
  const TShirtCard = () => {
    return (
      <div className="relative mx-6 w-40">
        <figure>
          <img src={TShirt1} alt="" />
        </figure>
        <h3 className="font-bold">T-shirt 1</h3>
        <div className="flex gap-4">
          <span className="text-gray-200">$20.99</span>
          <span className="text-gray-500 line-through">$25.99</span>
        </div>
        <button className="w-full bg-accent py-2 mt-4 text-white font-semibold hover:bg-accent/90 transition-colors duration-300">
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article className="w-full mt-20 lg:w-11/12 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto">
          <div className="relative w-full border-b border-slate-700 pb-4">
            <h2>Archives: Shop</h2>
          </div>
          <div className="flex gap-8 w-full px-12">
            <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto lg:w-5/6">
              <div className="flex justify-between gap-4 w-full">
                <p className="text-sm text-gray-400">
                  Showing 1 - 12 of 20 results
                </p>
                <select name="Dropdown" id="" className="text-sm text-gray-400">
                  <option value="Default Sorting">Default Sorting</option>
                  <option value="2">Sort by Popularity</option>
                  <option value="3">Sort by Average Rating</option>
                  <option value="4">Sort by Latest</option>
                  <option value="5">Sort by Price: Low to High</option>
                  <option value="6">Sort by Price: High to Low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-12 w-full">
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
              </div>
            </div>
            <div className="w-80">
              <h2>Cart</h2>
              <p>No products in the cart.</p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Shop;
