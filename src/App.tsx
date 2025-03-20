import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./styles/App.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import "./i18n/i18n";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/layout/Navbar/Header"));
const Hero = lazy(() => import("./pages/Home/Hero/Hero"));
const News = lazy(() => import("./pages/Home/News/News"));
const About = lazy(() => import("./pages/Home/About/About"));
const Tour = lazy(() => import("./pages/Home/Tour/Tour"));
const Albums = lazy(() => import("./pages/Home/Albums/Albums"));
const Media = lazy(() => import("./pages/Home/Media/Media"));
const Store = lazy(() => import("./components/Store"));
const Follow = lazy(() => import("./pages/Home/Follow/Follow"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const MusicPlayer = lazy(() => import("./components/MusicPlayer"));
const Footer = lazy(() => import("./components/layout/Footer/Footer"));

const NewsBlog = lazy(() => import("./components/NewsBlog"));
const Members = lazy(() => import("./components/Members"));
const TourBlog = lazy(() => import("./components/TourBlog"));
const Shop = lazy(() => import("./components/Shop"));
const MusicRender = lazy(() => import("./components/MusicRender"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <MusicPlayer />
      <News />
      <About />
      <Tour />
      <Albums />
      <Media />
      <Store />
      <Follow />
    </Suspense>
  );
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />

      <ScrollToTopButton />
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

      <Footer />
    </I18nextProvider>
  );
}

export default App;
