export const storeSliderSettings = {
  dots: false, // Mostrar puntos de navegación
  infinite: true, // Desplazamiento infinito
  speed: 500, // Velocidad de transición en milisegundos
  slidesToShow: 4, // Cantidad de elementos visibles
  slidesToScroll: 2, // Cantidad de elementos que se mueven por transición
  autoplay: false, // Activar desplazamiento automático
  arrows: false, // Mostrar flechas
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
