import { useTranslation } from "react-i18next";
import TourTable from "./TourTable";

function Tour() {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin tour py-16 mx-auto" id="tour">
      <article className="container flex flex-col justify-center items-center gap-12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("tour.title1")}
            <span>{t("tour.titleSpan")}</span>
            {t("tour.title2")}
          </h2>
          <p className="text-lg">{t("tour.description")}.</p>
        </div>
        <div className="w-full overflow-x-auto">
          <TourTable />
          <div className="flex justify-center my-8">
            <a href="#" className="red__btn">
              {t("tour.table.coming")}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Tour;
