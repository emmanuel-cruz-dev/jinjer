const Albums = () => {
  return (
    <section
      className="scroll-top-margin albums py-16 mx-auto bg-white text-black"
      id="albums"
    >
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            Albu<span>ms</span>
          </h2>
          <p className="text-lg">
            Our latest videos, audios on our official Youtube channel! Don't
            forget subscribe us!
          </p>
        </div>
        <div className="w-full xl:w-5/6"></div>
      </article>
    </section>
  );
};

export default Albums;
