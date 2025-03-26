import { useTranslation } from "react-i18next";
import { newsMediaData } from "../data/newsMediaData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function NewsBlog() {
  const { t } = useTranslation();

  return (
    <MediaItemsRender
      title={t("newsBlog.title")}
      arr={newsMediaData}
      route="newsblog"
      formVideo={true}
    />
  );
}

export default NewsBlog;
