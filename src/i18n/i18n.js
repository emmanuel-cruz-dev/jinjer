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
        paragraphTitle: "About",
        paragraph1:
          "Who are we? We are three cousins ​​united by a musical passion that challenges the limits of genres",
        paragraph2:
          "Our proposal combines the intensity of metal and the narrative of rap, creating a unique sound that fuses aggressive riffs with innovative melodies",
        paragraph3:
          "Each song is a reflection of our journey, where aggressive riffs converse with moments of deep introspection. For us, music is more than an art: it is a personal language, a way of life that is born from our connection and shared experiences",
        paragraph4:
          "Our compositions are testimonies of a career marked by creativity and commitment, where each note tells a story that goes beyond the stage",
        naomi: "Vocalist/Bass",
        july: "Guitar",
        benja: "Drumms",
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
        paragraphTitle: "Sobre",
        paragraph1:
          "¿Quiénes somos? Somos tres primos unidos por una pasión musical que desafía los límites de los géneros",
        paragraph2:
          "Nuestra propuesta combina la intensidad del metal y la narrativa del rap, creando un sonido único que fusiona riffs agresivos con melodías innovadoras",
        paragraph3:
          "Cada canción es un reflejo de nuestro viaje, donde los riffs agresivos conversan con momentos de profunda reflexión. Para nosotros, la música es más que un arte: es un lenguaje personal, una forma de vida que nace de nuestra conexión y experiencias compartidas",
        paragraph4:
          "Nuestras composiciones son testimonios de una trayectoria marcada por la creatividad y el compromiso, donde cada nota cuenta una historia que va más allá de los escenarios",
        naomi: "Vocalista/Bajo",
        july: "Guitarra",
        benja: "Batería",
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
