import { lazy, Suspense } from "react";

import Loader from "../components/ui/Loader";

const Hero = lazy(() => import("../pages/Home/Hero/Hero"));
const MusicPlayer = lazy(() => import("../components/ui/MusicPlayer"));
const News = lazy(() => import("../pages/Home/News/News"));
const About = lazy(() => import("../pages/Home/About/About"));
const Tour = lazy(() => import("../pages/Home/Tour/Tour"));
const Albums = lazy(() => import("../pages/Home/Albums/Albums"));
const Media = lazy(() => import("../pages/Home/Media/Media"));
const Store = lazy(() => import("../pages/Home/Store/Store"));
const Follow = lazy(() => import("../pages/Home/Follow/Follow"));

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <MusicPlayer />
      <News />
      <About />
      <Tour />
      <Albums />
      {/* <Media /> */}
      <Store />
      <Follow />
    </Suspense>
  );
}

export default Home;
