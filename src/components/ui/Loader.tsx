import Name from "./Name";
import JinjerLogo from "../../assets/icons/jinjer-logo.png";

function Loader() {
  return (
    <article className="loader__container">
      <div className="loader w-full h-screen flex flex-col justify-center items-center gap-4">
        <figure className="w-48">
          <img src={JinjerLogo} alt="Nephews Logo" loading="lazy" />
        </figure>
        <span className="text-3xl">
          <Name />
        </span>
      </div>
    </article>
  );
}

export default Loader;
