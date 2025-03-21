import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./styles/App.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import "./i18n/i18n";
import Loader from "./components/ui/Loader";
import Home from "./routes/Home";

const Header = lazy(() => import("./components/layout/Navbar/Header"));
const ScrollToTopButton = lazy(
  () => import("./components/ui/ScrollToTopButton")
);

const Footer = lazy(() => import("./components/layout/Footer/Footer"));

const NewsBlog = lazy(() => import("./routes/NewsBlog"));
const Members = lazy(() => import("./routes/Members"));
const TourBlog = lazy(() => import("./routes/TourBlog"));
const Shop = lazy(() => import("./pages/Shop/Shop/Shop"));
const MusicRender = lazy(() => import("./routes/MusicRender"));

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
