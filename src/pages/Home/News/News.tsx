import { useTranslation } from "react-i18next";
import Carousel from "../../../components/ui/Carousel";

function News() {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top-margin news-section bg-background py-16"
      id="news-section"
    >
      <article className="container flex flex-col justify-center items-center gap-16 mx-auto">
        <header className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("news.title1")}
            <span>{t("news.titleSpan")}</span>
            {t("news.title2")}
          </h2>
          <p className="text-lg">{t("news.description")}</p>
        </header>

        <main className="latest-news__carousel">
          <Carousel />
        </main>
      </article>
    </section>
  );
}

export default News;
