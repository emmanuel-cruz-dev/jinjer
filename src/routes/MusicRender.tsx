import { musicRenderData } from "../data/musicRenderData";
import useArticle from "../hooks/useArticle";
import MusicPlayer from "../pages/MusicPlayer/MusicPlayer";
import { AlbumItemProps } from "../types/types";

function MusicRender() {
  const article = useArticle<AlbumItemProps>(musicRenderData);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <MusicPlayer
      id={article.id}
      title={article.title}
      year={article.year}
      cover={article.cover}
    />
  );
}

export default MusicRender;
