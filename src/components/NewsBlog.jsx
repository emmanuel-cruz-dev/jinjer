import { newsMediaData } from "../data/newsMediaData.ts";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function NewsBlog() {
  return (
    <MediaItemsRender
      title="News and Blog"
      arr={newsMediaData}
      route="newsblog"
      formVideo
    />
  );
}

export default NewsBlog;
