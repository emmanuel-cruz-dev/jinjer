import { useTranslation } from "react-i18next";
const Tour = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin tour py-16 mx-auto" id="tour">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            T<span>ou</span>r Dates
          </h2>
          <p className="text-lg">
            A complete list of festivals and concerts to be held soon! You can
            buy the latest concert tickets here!
          </p>
        </div>
      </article>
    </section>
  );
};

export default Tour;
