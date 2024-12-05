import AlbumCover01 from "../assets/images/album-cover-01.jpg";
import AlbumCover02 from "../assets/images/album-cover-02.jpg";
import AlbumCover03 from "../assets/images/album-cover-03.jpg";
import AlbumCover04 from "../assets/images/album-cover-04.jpg";
import AlbumCover05 from "../assets/images/album-cover-05.jpg";
import AlbumCover06 from "../assets/images/album-cover-06.jpg";
import VinylDisc01 from "../assets/images/vinyl-disc-01.png";

const Album = ({ cover, title, year }) => {
  return (
    <article className="album__container">
      <div className="album__images__container">
        <img className="album__cover" src={cover} alt="" />
        <img className="album__disc" src={VinylDisc01} alt="" />
      </div>
      <h3 className="album__title">{title}</h3>
      <span className="album__year">{year}</span>
    </article>
  );
};

const Albums = () => {
  return (
    <section
      className="scroll-top-margin albums py-16 mx-auto bg-slate-300 text-black"
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
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-x-40 gap-y-12 w-full xl:w-5/6">
          <Album cover={AlbumCover01} title="Royal Blood" year="2024" />
          <Album cover={AlbumCover02} title="Bird of Hermes" year="2021" />
          <Album cover={AlbumCover03} title="Vertical" year="2019" />
          <Album cover={AlbumCover04} title="Ramones" year="2017" />
          <Album cover={AlbumCover05} title="Afterlife" year="2014" />
          <Album cover={AlbumCover06} title="The Jam" year="2011" />
        </div>
        <a href="#" className="red__btn">
          View On Itunes
        </a>
      </article>
    </section>
  );
};

export default Albums;
