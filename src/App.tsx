import { lazy } from "react";
import "./styles/App.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import "./i18n/i18n";
import AppRouter from "./routes/AppRouter";

const Header = lazy(() => import("./components/layout/Navbar/Header"));
const ScrollToTopButton = lazy(
  () => import("./components/ui/ScrollToTopButton")
);
const Footer = lazy(() => import("./components/layout/Footer/Footer"));

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <ScrollToTopButton />
      <AppRouter />
      <Footer />
    </I18nextProvider>
  );
}

export default App;
