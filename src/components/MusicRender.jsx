import { musicRenderData } from "../data/musicRenderData";
import Music from "./Music";
import { useParams } from "react-router-dom";

function MusicRender() {
  const { id } = useParams();
  const articleItem = musicRenderData.find((a) => a.id === parseInt(id));

  return (
    <Music
      articleId={articleItem.id}
      title={articleItem.title}
      year={articleItem.year}
      image={articleItem.image}
    />
  );
}

export default MusicRender;
