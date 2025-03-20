import goToSection from "../hooks/useGoToSection";
import { useTranslation } from "react-i18next";
import AlbumCover01 from "../assets/images/wallflowers.webp";
import AlbumCover02 from "../assets/images/melb.webp";
import AlbumCover03 from "../assets/images/macro.webp";
import AlbumCover04 from "../assets/images/cf.webp";
import AlbumCover05 from "../assets/images/koe.webp";
import AlbumCover06 from "../assets/images/idb.webp";
import VinylDisc01 from "../assets/images/vinyl-disc.avif";

const Album = ({ cover, title, year, id }) => {
  const { t } = useTranslation();

  return (
    <a
      key={id}
      onClick={() => goToSection(`/music/`, `${id}`)}
      href={`/music/${id}`}
      className="album__container"
      title={t("albums.listen")}
    >
      <div className="album__images__container">
        <img
          className="album__cover"
          width="500"
          height="500"
          src={cover}
          alt={`Portada del álbum ${title}`}
          loading="lazy"
        />
        <img
          className="album__disc"
          width="500"
          height="500"
          src={VinylDisc01}
          alt="Disco de vinilo"
          loading="lazy"
        />
      </div>
      <h3 className="album__title">{title}</h3>
      <span className="album__year">{year}</span>
    </a>
  );
};

const articles = [
  {
    id: 1,
    title: "Wallflowers",
    path: "wallflowers",
    year: "2021",
    image: AlbumCover01,
  },
  {
    id: 2,
    title: "Alive in Melbourne",
    path: "alive-in-melbourne",
    year: "2020",
    image: AlbumCover02,
  },
  {
    id: 3,
    title: "Macro",
    path: "macro",
    year: "2019",
    image: AlbumCover03,
  },
  {
    id: 4,
    title: "Cloud Factory",
    path: "cloud-factory",
    year: "2018",
    image: AlbumCover04,
  },
  {
    id: 5,
    title: "King of Everything",
    path: "king-of-everything",
    year: "2016",
    image: AlbumCover05,
  },
  {
    id: 6,
    title: "Inhale, Don't Breathe",
    path: "inhale-dont-breathe",
    year: "2012",
    image: AlbumCover06,
  },
];

const Albums = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin albums py-16 mx-auto bg-slate-200 text-black"
      id="albums"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("albums.title")}
            <span>{t("albums.titleSpan")}</span>
          </h2>
          <p className="text-lg">{t("albums.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-40 gap-y-12 w-full md:w-5/6">
          {articles.map((article) => (
            <Album
              key={article.id}
              cover={article.image}
              title={article.title}
              year={article.year}
              id={article.id}
            />
          ))}
        </div>
        <a href="#" className="red__btn hover:text-white">
          {t("albums.itunes")}
        </a>
      </article>
    </section>
  );
};

export default Albums;
