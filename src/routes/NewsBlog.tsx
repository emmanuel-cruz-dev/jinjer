import { newsMediaData } from "../data/newsMediaData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function NewsBlog() {
  return (
    <MediaItemsRender
      title="News and Blog"
      arr={newsMediaData}
      route="newsblog"
      formVideo={true}
    />
  );
}

export default NewsBlog;
