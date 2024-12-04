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
        paragraph1:
          "Who are we? Just three cousins chasing a shared passion for music",
        paragraph2:
          "Our musical approach is inspired by the expressive force of metal and the narrative of rap, combining aggressive riffs with innovative melodies to create a soundscape that breaks with traditional genre patterns",
        paragraph3:
          "Our sound is a fusion of energy, emotion, and relentless creativity. Each track is a reflection of our journey, balancing aggressive tones with melodic undertones",
        paragraph4:
          "Music isn’t just our passion—it’s our way of life. Join us as we carve our path in the world of sound, crafting stories and experiences that resonate far beyond the stage",
        paragraph5:
          "Our goal is to give life to music and transmit emotions through music",
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
        paragraph1:
          "¿Quiénes somos? Somos tres primos que perseguimos una pasión compartida por la música",
        paragraph2:
          "Nuestra propuesta musical se inspira en la fuerza expresiva del metal y la narrativa del rap, combinando riffs agresivos con melodías innovadoras para crear un landscape sonoro que rompe con los esquemas tradicionales de género",
        paragraph3:
          "Nuestro sonido es una fusión de energía, emoción y creatividad incansable. Cada tema es un reflejo de nuestro viaje, que equilibra tonos agresivos con matices melódicos",
        paragraph4:
          "La música no es solo nuestra pasión, es nuestra forma de vida. Únase a nosotros mientras forjamos nuestro camino en el mundo del sonido, creando historias y experiencias que resuenan mucho más allá del escenario",
        paragraph5:
          "Nuestro objetivo es dar vida a la música y transmitir emociones a traves de la música",
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
