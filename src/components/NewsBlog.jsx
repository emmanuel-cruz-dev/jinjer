import newsMediaData from "../data/newsMediaData.json";
import ItemsRender from "./ItemsRender";

const NewsBlog = () => {
  return (
    <>
      <ItemsRender
        title="News and Blog"
        obj={newsMediaData}
        route="newsblog"
        formVideo
      />
    </>
  );
};

export default NewsBlog;
