import ImgBlog from "../assets/images/blognews.jpg";
const NewsBlog = () => {
  return (
    <section className="newsblog" id="newsblog">
      <article className="py-10">
        <article className="m-20 mb-12 p-20 bg-black/90 flex flex-col justify-center items-center gap-12">
          <div className="text-center flex flex-col gap-4">
            <h2 className="logo text-5xl">
              <span>Noticias</span> Blog
            </h2>
            <p className="text-lg">Descripción</p>
          </div>
          <article className="flex flex-col justify-center items-center gap-4">
            <figure className="w-5/6">
              <img className="w-full" src={ImgBlog} alt="" />
            </figure>
          </article>
        </article>
      </article>
    </section>
  );
};

export default NewsBlog;
