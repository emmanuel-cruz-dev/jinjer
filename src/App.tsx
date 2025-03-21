import { lazy } from "react";
import "./styles/App.scss";
import AppRouter from "./routes/AppRouter";

const Header = lazy(() => import("./components/layout/Navbar/Header"));
const ScrollToTopButton = lazy(
  () => import("./components/ui/ScrollToTopButton")
);
const Footer = lazy(() => import("./components/layout/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
