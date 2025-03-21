import { useTranslation } from "react-i18next";
import StoreSlider from "./StoreSlider";
import useStoreNavigation from "../../../hooks/useStoreNavigation";

function Store() {
  const { t } = useTranslation();
  const goToSection = useStoreNavigation();

  return (
    <section
      className="scroll-top-margin store py-16 mx-auto bg-slate-200 text-black"
      id="store"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            <span>{t("store.titleSpan")}</span> {t("store.title")}
          </h2>
          <p className="text-lg">{t("store.description")}</p>
        </div>
        <div className="w-screen">
          <StoreSlider />
        </div>
        <a onClick={goToSection} href="/shop/" className="red__btn">
          {t("store.storeButton")}
        </a>
      </article>
    </section>
  );
}

export default Store;
