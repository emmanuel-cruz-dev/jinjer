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
      tour: {
        title1: "T",
        titleSpan: "ou",
        title2: "r Dates",
        description:
          "Take advantage of the opportunity to meet N3 in their world tour! We look forward to the following events",
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
        thunderstruck:
          "The Razors Edge is an album by Australian hard rock band AC/DC. It was the band's eleventh internationally released studio album and the twelfth to be released in Australia. The Razors Edge features hits Thunderstruck and Are You Ready, which reached #5 and #16 respectively on Billboard's Mainstream Rock Tracks Chart and Moneytalks, which peaked at #23 on the Billboard Hot 100. The album went Multi-Platinum and reached the US Top Ten.",
        hammerToFall:
          "Hammer to Fall is a 1984 song by the British rock band Queen. Written by guitarist Brian May, the song is the eighth track on their 1984 album The Works.[4] It was the fourth and final single to be released from that album, although the single version was edited down by thirty seconds from the version on the album.",
        novemberRain:
          "Official Music Video for November Rain performed by Guns N' Roses from their third studio album, 'Use Your Illusion I.' The song was written by the guitarist Slash and produced by Alex Aiono and Slash. Featured in Thor: Love and Thunder.",
        aroundTheWorld:
          "Around the World is a song by American rock band Red Hot Chili Peppers, appearing as the opening track on their seventh studio album Californication (1999). The song was released as the album's second single on August 23, 1999. The single peaked at number seven on the Billboard Modern Rock Tracks chart and number 16 on the Mainstream Rock Tracks chart. It was also the album's second single to peak at number one on the Billboard Hot 100 chart.",
        starman:
          "Official video for Starman by David Bowie, featuring footage from the Ziggy Stardust tour shot in the UK during 1972 and 1973. Filmed by late Bowie collaborator, photographer Mick Rock, the footage features the album version of Starman as its soundtrack.",
        undisclosedDesires:
          "Undisclosed Desires is a song by English rock band Muse. It was released as the second single from their fifth studio album, The Resistance, on 16 November 2009.",
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
        title1: "No",
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
      tour: {
        title1: "Cal",
        titleSpan: "en",
        title2: "dario",
        description:
          "¡Aprovecha la oportunidad de conocer a N3 en su tour mundial! Te esperamos en los siguientes eventos",
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
        thunderstruck:
          "The Razors Edge es un álbum de la banda australiana de hard rock AC/DC. Fue el undécimo álbum de estudio de la banda lanzado internacionalmente y el duodécimo en ser lanzado en Australia. The Razors Edge incluye los éxitos Thunderstruck y Are You Ready, que alcanzaron el puesto número 5 y el número 16 respectivamente en la lista Mainstream Rock Tracks Chart de Billboard y Moneytalks, que alcanzó el puesto número 23 en el Billboard Hot 100. El álbum fue multiplatino y llegó al Top Ten de Estados Unidos.",
        hammerToFall:
          "Hammer to Fall es una canción de 1984 de la banda de rock británica Queen. Escrita por el guitarrista Brian May, la canción es la octava pista de su álbum de 1984 The Works.[4] Fue el cuarto y último sencillo que se lanzó de ese álbum, aunque la versión del sencillo fue editada treinta segundos antes de la versión del álbum.",
        novemberRain:
          "Video musical oficial de November Rain interpretado por Guns N' Roses de su tercer álbum de estudio, 'Use Your Illusion I'. La canción fue escrita por el guitarrista Slash y producida por Alex Aiono y Slash. Aparece en Thor: Love and Thunder.",
        aroundTheWorld:
          "Around the World es una canción de la banda de rock estadounidense Red Hot Chili Peppers, que aparece como la pista de apertura de su séptimo álbum de estudio Californication (1999). La canción fue lanzada como el segundo sencillo del álbum el 23 de agosto de 1999. El sencillo alcanzó el puesto número siete en la lista Billboard Modern Rock Tracks y el número 16 en la lista Mainstream Rock Tracks. También fue el segundo sencillo del álbum en alcanzar el número uno en la lista Billboard Hot 100.",
        starman:
          "Video oficial de Starman de David Bowie, que incluye imágenes de la gira Ziggy Stardust filmadas en el Reino Unido durante 1972 y 1973. Filmado por el fallecido colaborador de Bowie, el fotógrafo Mick Rock, el metraje presenta la versión del álbum de Starman como banda sonora.",
        undisclosedDesires:
          "Undisclosed Desires es una canción de la banda británica Muse. La canción fue lanzada como el segundo sencillo de su quinto álbum de estudio The Resistance, el 16 de noviembre de 2009.",
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
        followButton: "Seguir a",
        following: "Siguiendo",
        followers: "Seguidores",
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
