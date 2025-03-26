import { useTranslation } from "react-i18next";
import { tourData } from "../data/tourData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function TourBlog() {
  const { t } = useTranslation();

  return (
    <MediaItemsRender title={t("tourData.title")} arr={tourData} route="tour" />
  );
}

export default TourBlog;
