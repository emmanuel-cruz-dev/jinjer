import { useParams, useNavigate } from "react-router-dom";
import newsMediaData from "../data/newsMediaData.json";
import ContactForm from "./ContactForm";

const TitleArticle = () => {
  return (
    <article className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="hero__title bg-accent/90 flex justify-center items-center mx-auto border-4 rounded-[1px] border-footer -rotate-6">
        <span className="uppercase font-semibold text-2xl whitespace-nowrap px-16 py-2 lg:text-4xl lg:px-28 lg:py-4">
          Blog and News
        </span>
      </div>
    </article>
  );
};
const NewsBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const article = newsMediaData.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2 className="text-3xl h-screen w-full">Artículo no encontrado</h2>;
  }

  const goToSection = (path, sectionId) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article
          key={article.id}
          className="w-full mt-20 lg:w-5/6 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto"
        >
          <div className="relative w-full border-b border-slate-700 pb-4">
            <TitleArticle />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <figure className="w-11/12 lg:w-4/6">
              <img className="w-full" src={article.image} alt="" />
            </figure>
            <div className="flex flex-col gap-4 w-11/12 lg:w-4/6">
              <p className="text-sm text-gray-400 uppercase">
                {article.date} -{" "}
                <a className="uppercase hover:text-slate-100 transition-colors duration-300">
                  Admin
                </a>
              </p>
              <h3 className="text-3xl font-semibold">{article.title}</h3>
              <p className="text-gray-400 border-b border-slate-700 pb-4">
                {article.description}
              </p>
              <div className="flex flex-row gap-4 justify-between text-gray-300 border-b border-slate-700 pb-4">
                {article.id > 1 ? (
                  <a
                    className="hover:text-slate-100 transition-colors duration-300"
                    onClick={() => goToSection(`/newsblog/`, `${article.id}`)}
                    href={`/newsblog/${article.id - 1}`}
                  >
                    {article.link1}
                  </a>
                ) : (
                  <span></span>
                )}
                {article.id < 6 ? (
                  <a
                    className="text-right hover:text-slate-100 transition-colors duration-300"
                    onClick={() => goToSection(`/newsblog/`, `${article.id}`)}
                    href={`/newsblog/${article.id + 1}`}
                  >
                    {article.link2}
                  </a>
                ) : (
                  <span></span>
                )}
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default NewsBlog;
