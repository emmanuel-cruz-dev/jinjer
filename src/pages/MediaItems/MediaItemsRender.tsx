import ContactForm from "../../components/ui/ContactForm";
import { FC } from "react";
import TitleArticle from "./TitleArticle";
import { MediaItemsRenderProps } from "../../types/types";
import useGoToSection from "../../hooks/useGoToSection";
import useArticle from "../../hooks/useArticle";
import { useTranslation } from "react-i18next";

const MediaItemsRender: FC<MediaItemsRenderProps> = ({
  title,
  arr,
  route,
  formVideo,
  image,
}) => {
  const article = useArticle(arr);
  const goToSection = useGoToSection();
  const { t } = useTranslation();

  if (!article) {
    return (
      <section className="newsblog second-page" id="newsblog">
        <h2 className="text-3xl h-screen w-full">Artículo no encontrado</h2>
      </section>
    );
  }

  return (
    <section className="newsblog second-page" id="newsblog">
      <article className="py-10">
        <article
          key={article.id}
          className="w-full mt-20 lg:w-5/6 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto"
        >
          <div className="relative w-full border-b border-slate-700 pb-4">
            <TitleArticle title={title} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto">
            <div className="w-11/12 lg:w-4/6 mx-auto">
              {image && (
                <img
                  className="w-full h-auto"
                  src={article.content}
                  alt={article.title}
                  width="800"
                  height="533"
                  loading="lazy"
                />
              )}
              {formVideo && (
                <iframe
                  loading="lazy"
                  className="w-full aspect-video"
                  src={article.content}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen={true}
                ></iframe>
              )}
            </div>
            <div className="flex flex-col gap-4 w-11/12 lg:w-4/6">
              <p className="text-sm text-gray-400 uppercase">
                {t(article.date)} -{" "}
                <a
                  href="#"
                  className="uppercase hover:text-slate-100 transition-colors duration-300"
                >
                  Admin
                </a>
              </p>
              <h3 className="text-3xl font-semibold">{t(article.title)}</h3>
              <div className="flex flex-col gap-4 border-b border-slate-700 pb-4">
                <p className="text-gray-400">{t(article.text1)}</p>
                <p className="text-gray-400">{t(article.text2)}</p>
                <p className="text-gray-400">{t(article.text3)}</p>
                <p className="text-gray-400">{t(article.text4)}</p>
              </div>

              <div className="flex flex-row gap-4 justify-between text-gray-300 border-b border-slate-700 pb-4">
                {article.id > 1 ? (
                  <a
                    className="hover:text-slate-100 transition-colors duration-300"
                    onClick={() => goToSection(`/${route}/`, `${article.id}`)}
                    href={`/${route}/${article.id - 1}`}
                  >
                    Previous - {article.link1}
                  </a>
                ) : (
                  <span></span>
                )}
                {article.id < arr.length ? (
                  <a
                    className="text-right hover:text-slate-100 transition-colors duration-300"
                    onClick={() => goToSection(`/${route}/`, `${article.id}`)}
                    href={`/${route}/${article.id + 1}`}
                  >
                    Next - {article.link2}
                  </a>
                ) : (
                  <span></span>
                )}
              </div>
              <div>{formVideo && <ContactForm />}</div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default MediaItemsRender;
