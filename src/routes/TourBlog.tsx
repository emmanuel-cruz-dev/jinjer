import { tourData } from "../data/tourData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function TourBlog() {
  return <MediaItemsRender title="Tour" arr={tourData} route="tour" />;
}

export default TourBlog;
