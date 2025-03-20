import { useTranslation } from "react-i18next";
import useGoToSection from "../../../hooks/useGoToSection";
import VinylDisc01 from "../../../assets/images/vinyl-disc.avif";
import { FC } from "react";
import { AlbumItemProps } from "../../../types/types";

const AlbumItem: FC<AlbumItemProps> = ({ cover, title, year, id }) => {
  const { t } = useTranslation();
  const goToSection = useGoToSection();

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

export default AlbumItem;
