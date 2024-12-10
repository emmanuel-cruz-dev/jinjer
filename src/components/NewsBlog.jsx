import ImgBlog from "../assets/images/blognews.jpg";
import ContactForm from "./ContactForm";

const TitleArticle = () => {
  return (
    <article className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="hero__title bg-accent/90 flex justify-center items-center mx-auto border-4 rounded-sm border-footer -rotate-6">
        <span className="uppercase font-semibold text-4xl px-16 py-2 lg:text-3xl lg:px-28 lg:py-4">
          Blog and News
        </span>
      </div>
    </article>
  );
};
const NewsBlog = () => {
  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article className="w-11/12 mt-20 lg:w-5/6 mb-12 py-12 lg:py-20 bg-black/90 flex flex-col justify-center items-center gap-12 mx-auto">
          <div className="relative w-full border-b border-slate-700 pb-4">
            <TitleArticle />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <figure className="w-9/12">
              <img className="w-full" src={ImgBlog} alt="" />
            </figure>
            <div className="flex flex-col gap-4 w-9/12">
              <p className="text-gray-400 uppercase">
                February 3, 2018 -{" "}
                <a
                  className="uppercase hover:text-slate-100 transition-colors duration-300"
                  href="#"
                >
                  Admin
                </a>
              </p>
              <h3 className="text-3xl font-semibold">
                Neue ZwoHandBreit EP in Arbeit
              </h3>
              <p className="text-gray-400 border-b border-slate-700 pb-4">
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
                Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
                dignissim nunc eros, eget luctus lorem ultricies nec.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 lg:justify-between text-gray-300 border-b border-slate-700 pb-4">
                <a
                  className="hover:text-slate-100 transition-colors duration-300"
                  href="#"
                >
                  Neuer Song: Ein Funken Hoffnung
                </a>
                <a
                  className="hover:text-slate-100 transition-colors duration-300"
                  href="#"
                >
                  Slipknot - Rock Am Ring Official Video
                </a>
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
