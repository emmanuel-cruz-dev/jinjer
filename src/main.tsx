import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/main.scss";
import App from "./App";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
// import "./i18n/i18n";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <FiltersProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FiltersProvider>
    </I18nextProvider>
  </StrictMode>
);
