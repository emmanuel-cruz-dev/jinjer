import ImgBlog from "../assets/images/blognews.jpg";
import ContactForm from "./ContactForm";
const NewsBlog = () => {
  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article className="m-2 mt-20 lg:m-20 mb-12 p-12 lg:p-20 bg-black/90 flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center w-full border-b border-slate-700 pb-4">
            <h2 className="logo text-4xl"> Blog and News</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <figure className="w-5/6">
              <img className="w-full" src={ImgBlog} alt="" />
            </figure>
            <div className="flex flex-col gap-4 w-5/6">
              <p className="text-gray-400">
                February 3, 2018 -{" "}
                <a className="uppercase" href="#">
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
              <div className="flex flex-col lg:flex-row gap-4 lg:justify-between border-b border-slate-700 pb-4">
                <a href="#">Neuer Song: Ein Funken Hoffnung</a>
                <a href="#">Slipknot - Rock Am Ring Official Video</a>
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
