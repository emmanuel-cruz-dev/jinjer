import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        news: "News",
        about: "About",
        tour: "Tour",
        albums: "Albums",
        media: "Media",
        store: "Store",
        follow: "Follow",
        contact: "Contact",
        albumTitle: "Latest Album",
        albumDescription:
          "Metallic fury emerges from the shadows, transforming suffering into a hymn of resistance and absolute redemption",
      },
      news: {
        title1: "Latest N",
        titleSpan: "ew",
        title2: "s",
        description:
          "Stay updated with the latest events from our concerts and more. Welcome to the N3 World!",
      },
      about: {
        title1: "The",
        title2: "History",
        description:
          "Who were N3 and what was their purpose? There's no room for such silly questions! We're here for the music",
      },
      // ... más traducciones
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        news: "Noticias",
        about: "Nosotros",
        tour: "Gira",
        albums: "Álbumes",
        media: "Multimedia",
        store: "Tienda",
        follow: "Redes",
        contact: "Contacto",
        albumTitle: "Último Lanzamiento",
        albumDescription:
          "Furia metálica que emerge de las sombras, transformando el sufrimiento en un himno de resistencia y redención absoluta",
      },
      news: {
        title1: "Últimas No",
        titleSpan: "ve",
        title2: "dades",
        description:
          "Mantente al día con los últimos eventos de nuestros conciertos y mucho más. ¡Bienvenido al mundo de N3!",
      },
      about: {
        title1: "La",
        title2: "Historia",
        description:
          "¿Quiénes eran N3 y cuál era su propósito? No hay tiempo para preguntas tan tontas. Estamos acá por la música",
      },
      // ... más traducciones
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
