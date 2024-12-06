import { useTranslation } from "react-i18next";

const Store = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin store py-16 mx-auto bg-slate-300 text-black"
      id="store"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            <span>{t("store.titleSpan")}</span> {t("store.title")}
          </h2>
          <p className="text-lg">{t("store.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-40 gap-y-12 w-full md:w-5/6"></div>
        <a href="#" className="red__btn">
          {t("store.amazonButton")}
        </a>
      </article>
    </section>
  );
};

export default Store;
