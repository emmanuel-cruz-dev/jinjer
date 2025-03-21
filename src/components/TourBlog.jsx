import { tourData } from "../data/tourData.ts";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function TourBlog() {
  return <MediaItemsRender title="Tour" arr={tourData} route="tour" />;
}

export default TourBlog;
