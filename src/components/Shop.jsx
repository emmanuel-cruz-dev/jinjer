const Shop = () => {
  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article className="w-full mt-20 lg:w-5/6 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto">
          <div className="relative w-full border-b border-slate-700 pb-4">
            <h2>Shop</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto">
            <div className="flex flex-col gap-4 w-11/12 lg:w-4/6">
              <p className="text-sm text-gray-400 uppercase">
                Esto era la fecha
              </p>

              <p className="text-sm text-gray-400 uppercase">Los textos</p>

              <div className="flex flex-row gap-4 justify-between text-gray-300 border-b border-slate-700 pb-4"></div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Shop;
