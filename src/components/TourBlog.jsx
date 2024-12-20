import tourData from "../data/tourData.json";
import ItemsRender from "./ItemsRender";

const TourBlog = () => {
  return (
    <>
      <ItemsRender title="Tour" obj={tourData} route="tour" />
    </>
  );
};

export default TourBlog;
