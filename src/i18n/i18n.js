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
        closeButton: "Close",
      },
      news: {
        title1: "Latest N",
        titleSpan: "ew",
        title2: "s",
        description:
          "Stay updated with the latest events from our concerts and more. Welcome to the Jinjer World!",
      },
      about: {
        title1: "The",
        title2: "History",
        description:
          "Who were Jinjer and what was their purpose? There's no room for such silly questions! We're here for the music",
        paragraphTitle: "About",
        paragraph1:
          "Who are we? We are four musicians ​​united by a musical passion that challenges the limits of genres",
        paragraph2:
          "Each song is a reflection of our journey, where aggressive riffs converse with moments of deep introspection. For us, music is more than an art: it is a personal language, a way of life that is born from our connection and shared experiences",
        paragraph3:
          "Our compositions are testimonies of a career marked by creativity and commitment, where each note tells a story that goes beyond the stage",
        tatiana: "Vocals",
        roman: "Guitar",
        eugene: "Bass",
        vlad: "Drumms",
      },
      tour: {
        title1: "T",
        titleSpan: "ou",
        title2: "r Dates",
        description:
          "Take advantage of the opportunity to meet Jinjer in their world tour! We look forward to the following events",
        table: {
          th1: "Date",
          th2: "Venue",
          th3: "Location",
          th4: "Tickets",
          germany: "Germany",
          spain: "Spain",
          usa: "United States",
          uk: "England",
          belgium: "Belgium",
          hungary: "Hungary",
          france: "France",
          soldOut: "Sold-Out",
          available: "Available",
          coming: "Up-coming Events",
        },
      },
      albums: {
        title: "Albu",
        titleSpan: "ms",
        description:
          "Discover the collection of albums that capture our evolution and musical essence as a band. Don't miss it!",
        itunes: "View On Itunes",
      },
      media: {
        description:
          "We share relevant content from other bands while we continue working on our own productions",
        views: "Views",
        watch: "Watch Now",
        greenSerpent:
          "Check out the brand new single 'GREEN SERPENT', the fourth single taken from JINJER's highly anticipated 5th studio album, to be released via Napalm Records on February 7th 2025",
        pisces:
          "I believe we had this idea to record a new version of “Pisces” when we first rehearsed the song with Vlad Ulasevich as a new drummer. His drumming makes the song sound really different. So we finally had some free time last winter, we went to Istok studio in Kiev, did a live recording and shooting, then added over some extra lines, like a few backing vocals and guitars, then Max from Morton Studio made this new magnificent version of mixing and here we are - Pisces video. I hope you will enjoy it!",
        iSpeakAstronomy:
          "'I Speak Astronomy' is a thought-provoking work on our connection to the universe, the nature of existence and the search for knowledge",
        vortex:
          "'Vortex' is a powerful metaphor about internal struggle and the overwhelming weight of thoughts and emotions",
        whoIsGonnaBeTheOne:
          "The song addresses the idea of ​​responsibility and courage. It asks who will have the courage to acknowledge their loved ones without the protective masks we all wear, both literally and figuratively",
        scissors:
          "The song explores the emotional pain and anguish a person can feel when they see someone they love suffer",
      },
      store: {
        title: "Store",
        titleSpan: "Our",
        description:
          "Check out our awesome store items below! We design custom t-shirts for our amazing fans!",
        addToCart: "Add To Cart",
        amazonButton: "View On Amazon Store",
      },
      follow: {
        title1: "Stay Con",
        titleSpan: "nec",
        title2: "ted",
        description:
          "Explore our social media highlights, from trending tweets to photo memories and fan love",
        posts: "Posts",
        followButton: "Follow",
        following: "Following",
        followers: "Followers",
        rockAmRing:
          "📢 Just announced: Jinjer headlines the Friday lineup at Festival Vibes! 🎤🔥 Are you ready for this? #RAR2025 #FestivalSeason",
        carlaStoneCold:
          "OMG! Just found out Jinjer is playing in my city next week! Can't wait to see them live! 🤩🎶 #Excited",
        indieRockFest:
          "🎸 The countdown begins! Don't miss Jinjer live at Indie Rock Fest this Saturday. 🔥 Get your tickets now! #LiveMusic #Jinjer",
        musicLoverZack:
          "Just listened to Jinjer latest track. Pure magic! ✨🎶 If you haven't heard them yet, you're missing out! #Jinjer #NewMusic",
        sophiaJones:
          "Still can't believe I met Jinjer after their show last night! The sweetest band ever. 💕🎸 #FanMoment #BestNight",
      },
      footer: {
        latestPosts: "Latest Posts",
        bandOnTour: "Band On Tour",
        starts: "Starts on 23rd February 2025",
        review: "Hollow Thrones Review",
        reviewDate: "11th November 2024",
        bookings: "Bookings",
        recordLabels: "Record Labels",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        powered: "Powered by",
      },
      musicPlayer: {
        albumCover: "Album Cover",
        prev: "Previous",
        play: "Play",
        pause: "Pause",
        next: "Next",
        expand: "Expand",
        collapse: "Collapse",
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
        closeButton: "Cerrar",
      },
      news: {
        title1: "No",
        titleSpan: "ve",
        title2: "dades",
        description:
          "Mantente al día con los últimos eventos de nuestros conciertos y mucho más. ¡Bienvenido al mundo de Jinjer!",
      },
      about: {
        title1: "La",
        title2: "Historia",
        description:
          "¿Quiénes son Jinjer y cuál era su propósito? No hay tiempo para preguntas tan tontas. Estamos aquí por la música",
        paragraphTitle: "Sobre",
        paragraph1:
          "¿Quiénes somos? Somos cuatro músicos unidos por una pasión musical que desafía los límites de los géneros",
        paragraph2:
          "Cada canción es un reflejo de nuestro viaje, donde los riffs agresivos conversan con momentos de profunda reflexión. Para nosotros, la música es más que un arte: es un lenguaje personal, una forma de vida que nace de nuestra conexión y experiencias compartidas",
        paragraph3:
          "Nuestras composiciones son testimonios de una trayectoria marcada por la creatividad y el compromiso, donde cada nota cuenta una historia que va más allá de los escenarios",
        tatiana: "Voz",
        roman: "Guitarra",
        eugene: "Bajo",
        vlad: "Batería",
      },
      tour: {
        title1: "Cal",
        titleSpan: "en",
        title2: "dario",
        description:
          "¡Aprovecha la oportunidad de conocer a Jinjer en su tour mundial! Te esperamos en los siguientes eventos",
        table: {
          th1: "Fecha",
          th2: "Lugar",
          th3: "Ubicación",
          th4: "Entradas",
          germany: "Alemania",
          spain: "España",
          usa: "Estados Unidos",
          uk: "Inglaterra",
          belgium: "Bélgica",
          hungary: "Hungría",
          france: "Francia",
          soldOut: "Agotadas",
          available: "Disponibles",
          coming: "Próximos Eventos",
        },
      },
      albums: {
        title: "Álbum",
        titleSpan: "es",
        description:
          "Descubre la colección de discos que capturan nuestra evolución y esencia musical como banda. ¡No te lo pierdas!",
        itunes: "Ver en Itunes",
      },
      media: {
        description:
          "Compartimos contenido relevante de otras bandas mientras seguimos trabajando en nuestras propias producciones",
        views: "Vistas",
        watch: "Ver Ahora",
        greenSerpent:
          "Echa un vistazo al nuevo sencillo 'GREEN SERPENT', el cuarto sencillo extraído del tan esperado quinto álbum de estudio de JINJER, que se lanzará a través de Napalm Records el 7 de febrero de 2025",
        pisces:
          "Creo que tuvimos la idea de grabar una nueva versión de “Pisces” cuando ensayamos por primera vez la canción con Vlad Ulasevich como nuevo baterista. Su forma de tocar la batería hace que la canción suene realmente diferente. Así que finalmente tuvimos algo de tiempo libre el invierno pasado, fuimos al estudio Istok en Kiev, hicimos una grabación y filmación en vivo, luego agregamos algunas líneas adicionales, como algunos coros y guitarras, luego Max de Morton Studio hizo esta nueva y magnífica versión de la mezcla y aquí estamos: el video de Pisces. ¡Espero que lo disfruten!",
        iSpeakAstronomy:
          "'I Speak Astronomy' es una obra que invita a la reflexión sobre nuestra conexión con el universo, la naturaleza de la existencia y la búsqueda de conocimiento",
        vortex:
          "'Vortex' es una poderosa metáfora sobre la lucha interna y el peso abrumador de los pensamientos y emociones",
        whoIsGonnaBeTheOne:
          "Esta canción aborda la idea de coraje y responsabilidad. Pregunta quién tendrá la valentía de reconocer a sus seres queridos sin las máscaras protectoras que todos llevamos, tanto literal como figurativamente",
        scissors:
          "La canción explora el dolor emocional y la angustia que una persona puede sentir al ver a alguien querido sufrir",
      },
      store: {
        titleSpan: "Nuestra",
        title: "Tienda",
        description:
          "¡Echa un vistazo a éstos increíbles artículos! ¡Diseñamos remeras personalizadas para nuestros increíbles fans!",
        addToCart: "Agregar al carrito",
        amazonButton: "Ver en la tienda de Amazon",
      },
      follow: {
        title1: "Mantente Co",
        titleSpan: "nec",
        title2: "tado",
        description:
          "Explora aspectos destacados de nuestras redes, desde los tweets más populares hasta los recuerdos fotográficos y el cariño de los fans",
        posts: "Posteos",
        followButton: "Seguir",
        following: "Siguiendo",
        followers: "Seguidores",
        rockAmRing:
          "📢 Último momento: Jinjer encabeza el lineup del viernes en el Festival Vibes. 🎤🔥 ¿Estás listo para esto? #RAR2025 #TemporadaDeFestivales",
        carlaStoneCold:
          "¡DIOOS! Acabo de enterarme que Jinjer toca en mi ciudad la semana que viene. ¡No puedo esperar para verlos en vivo! 🤩🎶 #Emocionada",
        indieRockFest:
          "🎸 ¡Empieza la cuenta regresiva! No te pierdas a Jinjer en vivo este sábado en el Indie Rock Fest. 🔥 ¡Conseguí tus entradas ahora! #MúsicaEnVivo #Jinjer",
        musicLoverZack:
          "Acabo de escuchar el último tema de Jinjer. ¡Magia pura! ✨🎶 Si todavía no los escuchaste, te lo estás perdiendo. #Jinjer #MúsicaNueva",
        sophiaJones:
          "Todavía no puedo creer que conocí a Jinjer después del show de anoche. ¡La banda más copada! 💕🎸 #MomentoFan #MejorNoche",
      },
      footer: {
        latestPosts: "Últimos Posteos",
        bandOnTour: "Banda de Gira",
        starts: "Inicio 23 de Febrero de 2025",
        review: "Reseña de Hollow Thrones",
        reviewDate: "11 de Noviembre de 2024",
        bookings: "Reservas",
        recordLabels: "Discográfica",
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
        powered: "Diseñado por",
      },
      musicPlayer: {
        albumCover: "Portada del Álbum",
        prev: "Anterior",
        play: "Reproducir",
        pause: "Pausa",
        next: "Siguiente",
        expand: "Expandir",
        collapse: "Contraer",
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
