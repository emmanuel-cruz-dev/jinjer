import Name from "../../../components/Name";

function Hero() {
  return (
    <section className="hero relative" id="hero">
      <article className="hero__container"></article>
      <article className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="hero__title bg-accent/90 flex justify-center items-center mx-auto border-4 rounded-sm border-footer -rotate-6">
          <span className="text-4xl px-16 py-2 lg:text-5xl lg:px-28 lg:py-4">
            <Name />
          </span>
        </div>
      </article>
    </section>
  );
}

export default Hero;
