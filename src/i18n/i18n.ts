import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
        readMore: "Read Full Article",
        seeDetails: "See Details",
        prevButton: "Previous",
        nextButton: "Next",
        text1: "New Single Out NOW!",
        text2: "Also DUEL PRE-ORDERS",
        text3: "New video OUT NOW!",
        text4: "Exclusive live tracks included!",
        text5: "Call me a Symbol drum playthrough!",
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
        listen: "Listen to album",
        itunes: "View On Itunes",
      },
      media: {
        description:
          "Explore our visual universe of music and memorable moments, each video tells a unique and powerful story",
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
        seeMore: "See more",
        seeLess: "See less",
      },
      store: {
        title: "Store",
        titleSpan: "Our",
        description:
          "Check out our awesome store items below! We design custom t-shirts for our amazing fans!",
        addToCart: "Add To Cart",
        storeButton: "View Store",
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
        review: "Duel EP Review",
        reviewDate: "11th November 2024",
        bookings: "Bookings",
        recordLabels: "Record Labels",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        powered: "Powered by",
      },
      musicPlayer: {
        albumCover: "Album Cover",
        songTitle: "Song Title",
        artist: "Artist",
        prev: "Previous",
        play: "Play",
        pause: "Pause",
        next: "Next",
        expand: "Expand",
        collapse: "Collapse",
      },
      musicPage: {
        prevBtn: "Previous",
        nextBtn: "Next",
        pauseBtn: "Pause",
        moreMenu: "More",
        closeMenu: "Close",
        playBtn: "Play on Spotify",
        saveBtn: "Save on Spotify",
        copyBtn: "Copy Link",
        playList: "Play Song",
        pauseList: "Pause Song",
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
        download: "Download",
        stream: "Stream",
      },
      contactForm: {
        comment: "Leave a Comment",
        required:
          "Your email address will not be published. Required fields are marked *.",
        save: "Save my name, email and website in this browser for the next time I comment.",
        message: "Comment*",
        name: "Name*",
        email: "Email*",
        website: "Website",
        post: "Post Comment",
      },
      newsBlog: {
        title: "News and Blog",
        greenSerpent: {
          date: "26 November, 2024",
          title: "NEW SINGLE OUT NOW!",
          text1:
            "GREEN SERPENT is here! Watch the music video now on YouTube and listen on all streaming platforms!",
          text2:
            "This track has quickly become one of our favorites from the upcoming album. It sonically captures everything we've been, where we are now, and where we're headed. It's the quintessence of all our musical endeavors!",
          text3:
            "Give it a like, share it, and drop a comment to let us know what you think!",
          text4:
            "🔥PRE-ORDER🔥 Our brand new album: DUÉL, will be out on February 7th, 2025! Get ready for it!",
        },
        kafka: {
          date: "10 September, 2024",
          title: "NEW SINGLE OUT NOW!",
          text1:
            "We are very excited to present our brand new single: KAFKA! The music and the message is something we wanted to convey for a very long time and we're stoked it's final out! Give it a like-view-comment-share and read the lyrics!",
          text2:
            "Kafka is the 3rd single taken from the new JINJER album titled DUÉL, which will be released on February 7th 2025. Music & Merch Pre-orders are live now!",
          text3:
            "Of all the releases we've made so far, finally having Duél in our hands and ready to be shared with the world, makes us very proud that our band still hasn't run out of creativity and inspiration.",
          text4:
            "The fact that we still challenge ourselves to release the best music we have ever made with each new release, is what keeps JINJER moving forward… and we're happy you're on this journey with us 💪",
        },
        rogue: {
          date: "10 September, 2008",
          title: "Rogue",
          text1:
            "Rogue is the 2nd single taken from the new JINJER album titled DUÉL, which will be released on February 7th 2025. Music & Merch Pre-orders are live now!",
          text2:
            "Our new single Rogue is a reaction to many things… it's brutally honest, it's in-your-face and one of the most intense tracks JINJER has ever released.",
          text3: "Give it a like-view-comment-share and read the lyrics!",
          text4:
            "We are so excited about this new track, about the new album and everything that's on the way… we hope you really like too",
        },
        daughter: {
          date: "1 August, 2024",
          title: "Someone's Daughter",
          text1:
            "We made a promise to ourselves to always strive to evolve and progress musically and lyrically with each new release.",
          text2:
            "This new single is the outcome of that belief.. that hard work, focus and determination to be better than before, to always keep on growing is the only way we can exist as a band.",
          text3:
            "We really hope you like this new JINJER chapter because we feel like this is the best work we've ever done!",
          text4:
            "Don't forget to WATCH-STREAM-SHARE Someone's Daughter as much as you can!",
        },
        surprise: {
          date: "25 June, 2024",
          title: "SURPRISE!!!💥",
          text1: "JINJER - From Nothing drops today!",
          text2:
            "We teamed up with Audiotree for an in-depth talk about not only our 15 year history, our creativity and our relationships with each other…but we also recorded three exclusive tracks live in their studio in Chicago!",
          text3:
            "It doesn't get more personal than this and it's a must see for all JINJER fans!",
          text4: "Check out the full episode.",
        },
        symbol: {
          date: "February 3, 2008",
          title: "Call me a Symbol",
          text1: "Drum Playthrough",
          text2:
            "Check out the brand new drum playthrough for “CALL ME A SYMBOL” by JINJER drummer Vlad Ulasevich, taken from the latest album Wallflowers.",
          text3: "It's a must see for all drummers and fans alike 🤘🥁🤘",
          text4: "We hope you like it!",
        },
      },
      members: {
        title: "Members",
        prev: "Previous",
        next: "Next",
        tatiana: {
          date: "26 November, 2024",
          title: "Tatiana Shmaylyuk - Lead Vocals 🎤",
          text1:
            "Tatiana is the iconic voice of Jinjer, renowned for her remarkable vocal range and dynamic performances. Joining the band in 2010, she brought a unique energy that helped redefine their sound. Her ability to seamlessly transition between brutal growls and angelic clean vocals has set her apart as one of the most versatile vocalists in the metal scene. Tatiana's lyrical contributions often explore themes of personal growth, societal struggles, and philosophical introspection, adding depth to Jinjer's music.",
          text2:
            "On stage, Tatiana commands attention with her magnetic presence and raw emotion. Her performances are a captivating blend of intensity and vulnerability, drawing fans into the heart of each song. Whether performing at massive festivals or intimate venues, she connects deeply with the audience, making every show unforgettable. Her bold fashion sense and striking appearance further reflect her individuality and artistic spirit.",
        },
        roman: {
          date: "20 December, 2024",
          title: "Roman Ibramkhalilov - Guitar 🎸",
          text1:
            "Roman is the mastermind behind Jinjer's intricate guitar work, crafting the heavy yet melodic soundscapes that define the band. A founding member of Jinjer, Roman's technical proficiency and innovative approach to guitar playing have been pivotal to their success. His ability to blend complex riffs, soaring solos, and atmospheric melodies showcases his deep understanding of progressive metal and beyond.",
          text2:
            "Roman's compositions often serve as the backbone of Jinjer's songs, providing both structure and emotion. He draws inspiration from a wide range of genres, seamlessly integrating elements of jazz, funk, and traditional metal into his playing. This fusion creates a distinctive style that sets Jinjer apart from their peers. Roman's meticulous attention to detail ensures that every note contributes to the band's signature sound, making their music as dynamic as it is memorable.",
        },
        eugene: {
          date: "1 January, 2025",
          title: "Eugene Abdukhanov - Bass 🎸",
          text1:
            "Eugene is the driving force behind Jinjer's powerful bass lines, anchoring the band's sound with his dynamic playing. As a founding member of Jinjer, Eugene has been instrumental in shaping their distinctive blend of groove, melody, and aggression. His deep understanding of rhythm and harmony allows him to craft bass lines that elevate the band's music to new heights.",
          text2:
            "Eugene's bass playing is characterized by its versatility and creativity, seamlessly transitioning between heavy grooves, melodic leads, and intricate fills. His ability to lock in with the drums while adding depth and texture to the music is a key element of Jinjer's sound. Eugene's contributions extend beyond the bass, with his songwriting and production skills playing a crucial role in the band's evolution.",
        },
        vlad: {
          date: "19 February, 2025",
          title: "Vlad Ulasevich - Drums 🥁",
          text1:
            "Vlad is the powerhouse drummer behind Jinjer's explosive rhythms, driving the band's music with his precision and intensity. Joining Jinjer in 2016, Vlad brought a new energy and creativity to the band's sound, elevating their live performances to new heights. His technical proficiency and dynamic playing have made him a standout figure in the metal scene.",
          text2:
            "Vlad's drumming is characterized by its speed, power, and complexity, blending elements of groove, blast beats, and polyrhythms. His ability to seamlessly transition between different styles and tempos adds depth and dimension to Jinjer's music, creating a dynamic and engaging listening experience. Vlad's stage presence is equally impressive, with his energetic performances captivating audiences around the world.",
        },
      },
      tourData: {
        title: "Tour Info",
        rockRing: {
          date: "23 February, 2025",
          text1:
            "The Rock am Ring Festival arrives in Paris with a special edition that brings together the best of metal and alternative rock on a single stage. Jinjer will be one of the most anticipated bands of the night, offering their powerful progressive sound and the unmistakable voice of Tatiana Shmayluk.",
          text2:
            "With a passionate audience and an adrenaline-fueled atmosphere, this festival promises to be an unforgettable experience for lovers of heavy music. From aggressive anthems to hypnotic melodies, Jinjer will demonstrate why they are one of the most innovative bands on the metal scene today.",
        },
        resurrection: {
          date: "05 March, 2025",
          text1:
            "Spain once again welcomes the metal titans to the legendary Resurrection Fest. Galicia becomes the epicenter of headbanging when Jinjer takes the stage, bringing their brutal blend of djent, groove, and progressive metal to an audience that vibrates with every riff.",
          text2:
            "With a setlist that combines their most aggressive classics and their most technical compositions, the Ukrainian band is ready to make history at this event. Resurrection Fest isn't just a festival; it's a community of metalheads who come together to experience a unique experience, and this year, Jinjer is one of the main reasons not to miss it.",
        },
        rockRoll: {
          date: "18 March, 2025",
          text1:
            "Rock 'n' Roll Camping in Austria isn't just a festival; it's an immersive experience where music, nature, and the metal community merge. Jinjer will bring their signature devastating sound to this event, turning the stage into a whirlwind of energy.",
          text2:
            "This festival is known for its authentic atmosphere, where fans can enjoy days of music and nights camping under the stars. Jinjer's power, combined with the festival's unique atmosphere, promises to be one of the most electrifying moments of the year.",
        },
        electricDaisy: {
          date: "01 April, 2025",
          text1:
            "The Electric Daisy Carnival (EDC) is world-famous for its focus on electronic music, but this year it surprises with a special section dedicated to the fusion of extreme genres.",
          text2:
            "Jinjer will be one of the stars of this innovative offering, bringing their progressive metal to an audience accustomed to electronic rhythms. In a show where lights, energy, and intensity combine perfectly, the band will demonstrate that their sound can conquer any stage.",
        },
        glastonBury: {
          date: "25 May, 2025",
          text1:
            "The Glastonbury Festival is a legendary event that brings together artists from all genres, and this year, Jinjer joins the lineup with an unmissable performance.",
          text2:
            "At a festival where musical diversity is key, the Ukrainian band will bring their power and technique to the British audience. With their blend of progressive metal and groove, Jinjer is ready to break the mold and prove that metal has a prominent place at this iconic event.",
        },
        tomorrowland: {
          date: "19 June, 2025",
          text1:
            "This year, Tomorrowland opens a space for sonic experimentation, and Jinjer will be the band tasked with taking metal to new heights. With an immersive stage presence and their signature progressive sound, the Ukrainian band promises a unique performance at this festival.",
          text2:
            "Tomorrowland has always been a place of innovation, and Jinjer fits perfectly with its spirit of breaking boundaries and offering unforgettable experiences.",
        },
        wacken: {
          date: "30 July, 2025",
          text1:
            "If there's one festival that defines the essence of metal, it's Wacken Open Air. Jinjer returns to Germany to shake the foundations of this iconic event. With a devastating setlist and a unique connection with the audience, the band is ready to deliver one of their most intense performances of the year.",
          text2:
            "With a devastating setlist and a unique connection with the audience, the band is ready to deliver one of their most intense performances of the year.",
          text3:
            "Wacken isn't just a festival; it's a sanctuary for metal lovers, and Jinjer is ready to give it their all on this legendary stage.",
        },
        sziget: {
          date: "06 August, 2025",
          text1:
            "The Sziget Festival is one of Europe's most diverse events, and this year Jinjer joins its impressive lineup. With their ability to blend brutality and melody, the Ukrainian band will deliver an unforgettable show in Budapest.",
          text2:
            "Sziget is known for its vibrant atmosphere, where music unites people from all over the world, and Jinjer promises to take this energy to the next level with a performance full of power and passion.",
        },
      },
      shop: {
        showing: "Showing",
        of: "of",
        results: "results.",
        default: "Default Sorting",
        sortRating: "Sort by Rating",
        sortSale: "Sort by Sale",
        sortLowHigh: "Sort by Price: Low to High",
        sortHighLow: "Sort by Price: High to Low",
        sale: "Sale!",
        addCart: "Add to Cart",
        cart: "Cart",
        cartMessage: "No products in the cart.",
        filterColor: "Filter by color",
        blue: "Blue",
        red: "Red",
        yellow: "Yellow",
      },
      goTopButton: "Go to top",
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
        readMore: "Leer Artículo Completo",
        seeDetails: "Ver Detalles",
        prevButton: "Anterior",
        nextButton: "Siguiente",
        text1: "¡Nuevo Sencillo YA DISPONIBLE!",
        text2: "También PREVENTA de DUEL",
        text3: "¡Nuevo video YA DISPONIBLE!",
        text4: "¡Incluye pistas en vivo exclusivas!",
        text5: "¡Interpretación de batería de Call me a Symbol!",
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
        listen: "Escuchar álbum",
        itunes: "Ver en Itunes",
      },
      media: {
        description:
          "Explora nuestro universo visual de música y los momentos más memorables, cada video cuenta una historia única y poderosa",
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
        seeMore: "Ver más",
        seeLess: "Ver menos",
      },
      store: {
        titleSpan: "Nuestra",
        title: "Tienda",
        description:
          "¡Echa un vistazo a éstos increíbles artículos! ¡Diseñamos remeras personalizadas para nuestros increíbles fans!",
        addToCart: "Agregar al carrito",
        storeButton: "Ver Tienda",
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
        review: "Reseña de Duel EP",
        reviewDate: "11 de Noviembre de 2024",
        bookings: "Reservas",
        recordLabels: "Discográfica",
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
        powered: "Diseñado por",
      },
      musicPlayer: {
        albumCover: "Portada del Álbum",
        songTitle: "Título de la Canción",
        artist: "Artista",
        prev: "Anterior",
        play: "Reproducir",
        pause: "Pausa",
        next: "Siguiente",
        expand: "Expandir",
        collapse: "Contraer",
      },
      musicPage: {
        prevBtn: "Anterior",
        nextBtn: "Siguiente",
        pauseBtn: "Pausa",
        moreMenu: "Más",
        closeMenu: "Cerrar",
        playBtn: "Reproducir en Spotify",
        saveBtn: "Guardar en Spotify",
        copyBtn: "Copiar Enlace",
        playList: "Reproducir Canción",
        pauseList: "Pausar Canción",
        privacy: "Política de Privacidad",
        terms: "Términos y Condiciones",
        download: "Descargar",
        stream: "Transmitir",
      },
      contactForm: {
        comment: "Deja un Comentario",
        required:
          "Tu dirección de correo no se publicará. Los campos obligatorios están marcados con *.",
        save: "Guarda mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente.",
        message: "Mensaje*",
        name: "Nombre*",
        email: "Correo Electrónico*",
        website: "Sitio Web",
        post: "Publicar Comentario",
      },
      newsBlog: {
        title: "Noticias y Blog",
        greenSerpent: {
          date: "26 de Noviembre de 2024",
          title: "NUEVO SENCILLO YA DISPONIBLE!",
          text1:
            "GREEN SERPENT ya está aquí! ¡Mira el videoclip ahora en YouTube y escúchalo en todas las plataformas de streaming!",
          text2:
            "Esta canción se ha convertido rápidamente en una de nuestras favoritas del próximo álbum. Captura con su sonido todo lo que hemos sido, dónde estamos ahora y hacia dónde nos dirigimos. ¡Es la quintaesencia de todos nuestros proyectos musicales!",
          text3:
            "¡Dale a me gusta, compártelo y deja un comentario para decirnos qué te parece!",
          text4:
            "🔥RESERVA🔥 ¡Nuestro nuevo álbum, DUÉL, saldrá el 7 de febrero de 2025! ¡Prepárate!",
        },
        kafka: {
          date: "10 Septiembre de 2024",
          title: "NUEVO SENCILLO YA DISPONIBLE!",
          text1:
            "¡Estamos muy emocionados de presentar nuestro nuevo sencillo: KAFKA! La música y el mensaje son algo que queríamos transmitir desde hace mucho tiempo y estamos encantados de que ya esté disponible. ¡Dale a 'Me gusta', 'Mira', 'Comenta', 'Comparte' y lee la letra!",
          text2:
            "Kafka es el tercer sencillo del nuevo álbum de JINJER, titulado DUÉL, que se lanzará el 7 de febrero de 2025. ¡Ya puedes reservar música y merchandising!",
          text3:
            "De todos los lanzamientos que hemos hecho hasta ahora, tener finalmente Duél en nuestras manos y listo para compartirlo con el mundo nos enorgullece mucho de que nuestra banda aún no se haya quedado sin creatividad e inspiración.",
          text4:
            "El hecho de que sigamos desafiándonos a nosotros mismos para lanzar la mejor música que hemos hecho con cada nuevo lanzamiento es lo que impulsa a JINJER a seguir adelante… y estamos felices de que estés en este viaje con nosotros 💪",
        },
        rogue: {
          date: "10 de Septiembre de 2008",
          title: "Rogue",
          text1:
            "Rogue es el segundo sencillo del nuevo álbum de JINJER, titulado DUÉL, que se lanzará el 7 de febrero de 2025. ¡Ya puedes reservar música y merchandising!",
          text2:
            "Nuestro nuevo sencillo, Rogue, es una reacción a muchas cosas... es brutalmente honesto, directo y uno de los temas más intensos que JINJER ha lanzado jamás.",
          text3: "¡Dale a me gusta, míralo, comenta, comparte y lee la letra!",
          text4:
            "Estamos muy emocionados con este nuevo tema, con el nuevo álbum y con todo lo que viene en camino... ¡Esperamos que a ti también te guste!",
        },
        daughter: {
          date: "1 de Agosto de 2024",
          title: "Someone's Daughter",
          text1:
            "Nos prometimos a nosotros mismos esforzarnos siempre por evolucionar y progresar musical y líricamente con cada nuevo lanzamiento.",
          text2:
            "Este nuevo sencillo es el resultado de esa convicción... que el trabajo duro, la concentración y la determinación para ser mejores que antes, para seguir creciendo siempre, es la única manera de existir como banda.",
          text3:
            "¡Esperamos que les guste este nuevo capítulo de JINJER porque creemos que es el mejor trabajo que hemos hecho!",
          text4:
            "¡No olviden ver, transmitir y compartir Someone's Daughter tanto como puedan!",
        },
        surprise: {
          date: "25 de Junio de 2024",
          title: "¡¡¡SORPRESA!!!💥",
          text1: "JINJER - From Nothing sale hoy!",
          text2:
            "Nos asociamos con Audiotree para una charla a fondo sobre no solo nuestros 15 años de historia, nuestra creatividad y nuestra relación... ¡sino que también grabamos tres temas exclusivos en vivo en su estudio de Chicago!",
          text3:
            "¡Es imposible ser más personal que esto y es imprescindible para todos los fans de JINJER!",
          text4: "No te pierdas el episodio completo.",
        },
        symbol: {
          date: "3 de Febrero de 2008",
          title: "Call me a Symbol",
          text1: "Sesión de Batería",
          text2:
            "No te pierdas la nueva interpretación de batería de “CALL ME A SYMBOL” del baterista de JINJER, Vlad Ulasevich, del último álbum Wallflowers.",
          text3: "Es una visita obligada para bateristas y fans 🤘🥁🤘",
          text4: "¡Esperamos que te guste!",
        },
      },
      members: {
        title: "Integrantes",
        prev: "Anterior",
        next: "Siguiente",
        tatiana: {
          date: "26 de Noviembre de 2024",
          title: "Tatiana Shmaylyuk - Vocalista Lider 🎤",
          text1:
            "Tatiana es la voz icónica de Jinjer, reconocida por su extraordinario rango vocal y sus dinámicas interpretaciones. Al unirse a la banda en 2010, aportó una energía única que ayudó a redefinir su sonido. Su capacidad para transicionar fluidamente entre gruñidos brutales y voces angelicales y limpias la ha distinguido como una de las vocalistas más versátiles de la escena metalera. Las contribuciones líricas de Tatiana a menudo exploran temas de crecimiento personal, luchas sociales e instrospección filosófica, aportando profundidad a la música de Jinjer.",
          text2:
            "En el escenario, Tatiana cautiva con su presencia magnética y su emoción pura. Sus interpretaciones son una cautivadora mezcla de intensidad y vulnerabilidad, que lleva a los fans al corazón de cada canción. Ya sea en festivales masivos o en recintos íntimos, conecta profundamente con el público, haciendo que cada espectáculo sea inolvidable. Su audaz sentido de la moda y su impactante apariencia reflejan aún más su individualidad y espíritu artístico.",
        },
        roman: {
          date: "20 de Diciembre de 2024",
          title: "Roman Ibramkhalilov - Guitarra 🎸",
          text1:
            "Roman es la mente maestra detrás del intrincado trabajo de guitarra de Jinjer, creando los paisajes sonoros pesados ​​pero melódicos que definen a la banda. Miembro fundador de Jinjer, la destreza técnica de Roman y su enfoque innovador al tocar la guitarra han sido fundamentales para su éxito. Su habilidad para combinar riffs complejos, solos imponentes y melodías atmosféricas demuestra su profundo conocimiento del metal progresivo y más allá.",
          text2:
            "Las composiciones de Roman a menudo sirven como la columna vertebral de las canciones de Jinjer, aportando estructura y emoción. Se inspira en una amplia gama de géneros, integrando a la perfección elementos del jazz, el funk y el metal tradicional en su forma de tocar. Esta fusión crea un estilo distintivo que distingue a Jinjer de sus colegas. La meticulosa atención de Roman al detalle garantiza que cada nota contribuya al sonido característico de la banda, haciendo que su música sea tan dinámica como memorable.",
        },
        eugene: {
          date: "1 de Enero de 2025",
          title: "Eugene Abdukhanov - Bajo 🎸",
          text1:
            "Eugene es la fuerza impulsora detrás de las potentes líneas de bajo de Jinjer, anclando el sonido de la banda con su dinámica interpretación. Como miembro fundador de Jinjer, Eugene ha sido fundamental en la creación de su distintiva mezcla de groove, melodía y agresividad. Su profundo conocimiento del ritmo y la armonía le permite crear líneas de bajo que elevan la música de la banda a nuevas alturas.",
          text2:
            "La interpretación de Eugene al bajo se caracteriza por su versatilidad y creatividad, con transiciones fluidas entre grooves potentes, solos melódicos y rellenos intrincados. Su capacidad para integrarse con la batería a la vez que añade profundidad y textura a la música es un elemento clave del sonido de Jinjer. Las contribuciones de Eugene van más allá del bajo, y sus habilidades de composición y producción han jugado un papel crucial en la evolución de la banda.",
        },
        vlad: {
          date: "19 de Febrero de 2025",
          title: "Vlad Ulasevich - Batería 🥁",
          text1:
            "Vlad es el baterista potente detrás de los ritmos explosivos de Jinjer, impulsando la música de la banda con su precisión e intensidad. Al unirse a Jinjer en 2016, Vlad aportó una nueva energía y creatividad al sonido de la banda, elevando sus presentaciones en vivo a nuevas alturas. Su dominio técnico y su dinamismo al tocar lo han convertido en una figura destacada en la escena del metal.",
          text2:
            "La batería de Vlad se caracteriza por su velocidad, potencia y complejidad, combinando elementos de groove, blast beats y polirritmos. Su capacidad para transicionar fluidamente entre diferentes estilos y tempos añade profundidad y dimensión a la música de Jinjer, creando una experiencia auditiva dinámica y cautivadora. La presencia escénica de Vlad es igualmente impresionante, con sus enérgicas actuaciones que cautivan al público de todo el mundo.",
        },
      },
      tourData: {
        title: "Info de la Gira",
        rockRing: {
          date: "23 de Febrero de 2025",
          text1:
            "El Rock am Ring Festival llega a París con una edición especial que reúne lo mejor del metal y el rock alternativo en un solo escenario. Jinjer será una de las bandas más esperadas de la noche, ofreciendo su poderoso sonido progresivo y la inconfundible voz de Tatiana Shmayluk.",
          text2:
            "Con un público apasionado y un ambiente cargado de adrenalina, este festival promete ser una experiencia inolvidable para los amantes de la música pesada. Desde himnos agresivos hasta melodías hipnóticas, Jinjer demostrará por qué es una de las bandas más innovadoras de la escena metal actual.",
        },
        resurrection: {
          date: "05 de Marzo de 2025",
          text1:
            "España vuelve a recibir a los titanes del metal en el legendario Resurrection Fest. Galicia se convierte en el epicentro del headbanging cuando Jinjer sube al escenario, llevando su brutal mezcla de djent, groove y metal progresivo a un público que vibra con cada riff.",
          text2:
            "Con un setlist que combina sus clásicos más agresivos y sus composiciones más técnicas, la banda ucraniana está lista para hacer historia en este evento. Resurrection Fest no solo es un festival, es una comunidad de metalheads que se reúnen para vivir una experiencia única, y este año, Jinjer es una de las razones principales para no perdérselo.",
        },
        rockRoll: {
          date: "18 de Marzo de 2025",
          text1:
            "El Rock 'n' Roll Camping en Austria no es solo un festival, es una experiencia inmersiva donde la música, la naturaleza y la comunidad metalera se fusionan. Jinjer traerá su característico sonido demoledor a este evento, convirtiendo el escenario en un torbellino de energía.",
          text2:
            "Este festival es conocido por su ambiente auténtico, donde los fans pueden disfrutar de días enteros de música y noches de camping bajo las estrellas. La potencia de Jinjer, combinada con la atmósfera única del festival, promete ser uno de los momentos más electrizantes del año.",
        },
        electricDaisy: {
          date: "01 de Abril de 2025",
          text1:
            "El Electric Daisy Carnival (EDC) es mundialmente famoso por su enfoque en la música electrónica, pero este año sorprende con una sección especial dedicada a la fusión de géneros extremos.",
          text2:
            "Jinjer será uno de los protagonistas en esta innovadora propuesta, llevando su metal progresivo a una audiencia acostumbrada a los ritmos electrónicos. En un espectáculo donde las luces, la energía y la intensidad se combinan a la perfección, la banda demostrará que su sonido puede conquistar cualquier escenario.",
        },
        glastonBury: {
          date: "25 de Mayo de 2025",
          text1:
            "El Glastonbury Festival es un evento legendario que reúne a artistas de todos los géneros, y este año, Jinjer se suma al cartel con una actuación imperdible.",
          text2:
            "En un festival donde la diversidad musical es la clave, la banda ucraniana llevará su potencia y técnica al público británico. Con su mezcla de metal progresivo y groove, Jinjer está listo para romper los esquemas y demostrar que el metal tiene un lugar destacado en este evento icónico.",
        },
        tomorrowland: {
          date: "19 de Junio de 2025",
          text1:
            "Este año Tomorrowland abre un espacio para la experimentación sonora, y Jinjer será la banda encargada de llevar el metal a nuevas dimensiones. Con una puesta en escena envolvente y su característico sonido progresivo, la banda ucraniana promete una actuación única en este festival.",
          text2:
            "Tomorrowland siempre ha sido un lugar de innovación, y Jinjer encaja perfectamente con su espíritu de romper fronteras y ofrecer experiencias inolvidables.",
        },
        wacken: {
          date: "30 de Julio de 2025",
          text1:
            "Si hay un festival que define la esencia del metal, ese es el Wacken Open Air. Jinjer regresa a Alemania para hacer temblar los cimientos de este icónico evento.",
          text2:
            "Con un setlist demoledor y una conexión única con el público, la banda está lista para ofrecer una de sus actuaciones más intensas del año.",
          text3:
            "Wacken no es solo un festival, es un santuario para los amantes del metal, y Jinjer está preparado para darlo todo en este escenario legendario.",
        },
        sziget: {
          date: "06 de Agosto de 2025",
          text1:
            "El Sziget Festival es uno de los eventos más diversos de Europa, y este año Jinjer se une a su impresionante alineación. Con su capacidad de mezclar brutalidad y melodía, la banda ucraniana ofrecerá un show inolvidable en Budapest.",
          text2:
            "El Sziget es conocido por su atmósfera vibrante, donde la música une a personas de todo el mundo, y Jinjer promete llevar esta energía al siguiente nivel con una actuación llena de potencia y pasión.",
        },
      },
      shop: {
        showing: "Mostrando",
        of: "de",
        results: "resultados.",
        default: "Orden Predeterminado",
        sortRating: "Filtrar por Rating",
        sortSale: "Filtrar por Oferta",
        sortLowHigh: "Filtrar Precio: Menor a Mayor",
        sortHighLow: "Filtrar Precio: Mayor a Menor",
        sale: "Oferta!",
        addCart: "Agregar al Carrito",
        cart: "Carrito",
        cartMessage: "No hay productos en el carrito.",
        filterColor: "Filtrar por color",
        blue: "Azul",
        red: "Rojo",
        yellow: "Amarillo",
      },
      goTopButton: "Ir arriba",
      // ... más traducciones
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma por defecto
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
