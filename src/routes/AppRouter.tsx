import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/ui/Loader";
import Home from "./Home";
import NewsBlog from "./NewsBlog";
import Members from "./Members";
import TourBlog from "./TourBlog";
import Shop from "../pages/Shop/Shop/Shop";
import MusicRender from "./MusicRender";

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsblog/:id" element={<NewsBlog />} />
        <Route path="/members/:id" element={<Members />} />
        <Route path="/tour/:id" element={<TourBlog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/music/:id" element={<MusicRender />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
