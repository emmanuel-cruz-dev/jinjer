import "./styles/App.scss";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Footer from "./components/Footer";
import News from "./components/News";
import About from "./components/About";
import Tour from "./components/Tour";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {/* <Loader /> */}
      <Header />
      <Hero />
      <News />
      <About />
      <Tour />
      <Footer />
    </I18nextProvider>
  );
}

export default App;
