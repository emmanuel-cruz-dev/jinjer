import Background from "../../../assets/images/gradient.avif";
import ShopCard from "./ShopCard";
import { shopProductsList } from "../../../data/shopProducts";
import { useTranslation } from "react-i18next";
import ShopFilters from "./ShopFilters";
import useFilters from "../../../hooks/useFilters";
import Cart from "../Cart/Cart";
//import { useState } from "react";

function Shop() {
  const { t } = useTranslation();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(shopProductsList);
  const productsLength = filteredProducts.length;
  const productsTotalLength = shopProductsList.length;

  // ------- Inicio: Lógica de Paginado ------- //

  // const [currentPage, setCurrentPage] = useState(1); // Página actual
  // const itemsPerPage = 12; // Número de productos por página

  // // Calcular los índices de los productos a mostrar
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentProducts = shopProductsList.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );

  // // Calcular el número total de páginas
  // const totalPages = Math.ceil(shopProductsList.length / itemsPerPage);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage((prevPage) => prevPage + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prevPage) => prevPage - 1);
  //   }
  // };

  // ------- Fin: Lógica de Paginado ------- //

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
          <div className="w-11/12 flex flex-col lg:flex-row gap-8 lg:w-full lg:px-12 mt-8 mx-auto">
            <div className="flex flex-col items-center gap-2 w-full mx-auto lg:w-5/6">
              <p className="text-sm text-gray-400">
                {t("shop.showing")} {productsLength} {t("shop.of")}{" "}
                {productsTotalLength} {t("shop.results")}
              </p>
              <ShopFilters />
              {/* Renderizado original terminado y funcional */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 pt-8 pb-12 w-full">
                {filteredProducts.map((product) => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </div>

              {/* Controles de paginación viejos */}
              {/* <div className="flex justify-between items-center border border-gray-600 mb-8">
                {products === shopProducts2 && (
                  <button className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer">
                    chevron_left
                  </button>
                )}
                <button
                  className={`${
                    products === shopProducts1 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  1
                </button>
                <button
                  className={`${
                    products === shopProducts2 ? "bg-gray-400" : ""
                  } w-10 h-10 flex justify-center items-center hover:bg-gray-400 cursor-pointer`}
                >
                  2
                </button>
                {products === shopProducts1 && (
                  <button className="w-10 h-10 flex justify-center items-center material-symbols-outlined hover:bg-gray-400 cursor-pointer">
                    chevron_right
                  </button>
                )}
              </div> */}

              {/* Inicio paginado nuevo de pilot */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 pt-8 pb-12 w-full">
                {currentProducts.map((product) => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-center items-center gap-4 my-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Anterior
                </button>
                <span>
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Siguiente
                </button>
              </div> */}
              {/* Fin paginado nuevo de pilot */}
            </div>
            <aside className="-order-1 lg:order-2 w-full lg:w-80 mb-4">
              <Cart />
            </aside>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Shop;
