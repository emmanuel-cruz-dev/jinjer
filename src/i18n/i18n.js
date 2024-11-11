import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
const resources = {
  en: {
    translation: {
      home: "Home",
      news: "News",
      about: "About",
      tour: "Tour",
      albums: "Albums",
      media: "Media",
      store: "Store",
      follow: "Follow",
      // ... más traducciones
    },
  },
  es: {
    translation: {
      home: "Inicio",
      news: "Noticias",
      about: "Nosotros",
      tour: "Gira",
      albums: "Álbumes",
      media: "Multimedia",
      store: "Tienda",
      follow: "Redes",
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
