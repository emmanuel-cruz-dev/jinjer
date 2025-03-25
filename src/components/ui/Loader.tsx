import Name from "./Name";
import JinjerLogo from "../../assets/icons/jinjer-icon.avif";

function Loader() {
  return (
    <article className="loader__container">
      <div className="loader w-full h-screen flex flex-col justify-center items-center gap-6">
        <figure className="w-36">
          <img
            src={JinjerLogo}
            alt="Jinjer Logo"
            width={270}
            height={270}
            loading="lazy"
          />
        </figure>
        <span className="text-3xl">
          <Name />
        </span>
      </div>
    </article>
  );
}

export default Loader;
