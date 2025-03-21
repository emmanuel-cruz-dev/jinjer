import { useTranslation } from "react-i18next";
import AlbumItem from "./AlbumItem";
import { albumsData } from "../../../data/albumsData";

function Albums() {
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
          {albumsData.map((article) => (
            <AlbumItem
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
}

export default Albums;
