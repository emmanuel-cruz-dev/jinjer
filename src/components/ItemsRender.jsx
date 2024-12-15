import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const ItemsRender = ({ title, obj, route, formVideo }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = obj.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2 className="text-3xl h-screen w-full">Artículo no encontrado</h2>;
  }

  const TitleArticle = (
    <article className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="hero__title bg-accent/90 flex justify-center items-center mx-auto border-4 rounded-[1px] border-footer -rotate-6">
        <span className="uppercase font-semibold whitespace-nowrap text-2xl px-16 py-2 lg:text-4xl lg:px-28 lg:py-4">
          {title}
        </span>
      </div>
    </article>
  );

  const goToSection = (path, sectionId) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article
          key={article.id}
          className="w-full mt-20 lg:w-5/6 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto"
        >
          <div className="relative w-full border-b border-slate-700 pb-4">
            {TitleArticle}
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto">
            <div className="w-11/12 lg:w-4/6 mx-auto">
              {formVideo && (
                <iframe
                  loading="lazy"
                  className="w-full aspect-video"
                  src={article.content}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="stric-origin-when-cross-origin"
                  allowFullScreen={true}
                ></iframe>
              )}
            </div>
            <div className="flex flex-col gap-4 w-11/12 lg:w-4/6">
              <p className="text-sm text-gray-400 uppercase">
                {article.date} -{" "}
                <a
                  href="#"
                  className="uppercase hover:text-slate-100 transition-colors duration-300"
                >
                  Admin
                </a>
              </p>
              <h3 className="text-3xl font-semibold">{article.title}</h3>
              <div className="flex flex-col gap-4 border-b border-slate-700 pb-4">
                <p className="text-gray-400">{article.text1}</p>
                <p className="text-gray-400">{article.text2}</p>
                <p className="text-gray-400">{article.text3}</p>
                <p className="text-gray-400">{article.text4}</p>
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
                {article.id < obj.length ? (
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

export default ItemsRender;
