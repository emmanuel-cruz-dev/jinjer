export const carouselSettings = {
  dots: false, // Mostrar puntos de navegación
  infinite: true, // Desplazamiento infinito
  speed: 500, // Velocidad de transición en milisegundos
  slidesToShow: 3, // Cantidad de elementos visibles
  slidesToScroll: 1, // Cantidad de elementos que se mueven por transición
  autoplay: false, // Activar desplazamiento automático
  arrows: true, // Mostrar flechas
  draggable: true,
  swipeToSlide: true,
  touchThreshold: 100,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
