import AlbumCover01 from "../assets/images/album-cover-01.jpg";
import VinylDisc01 from "../assets/images/vinyl-disc-01.png";

const Album = () => {
  return (
    <article className="album__container">
      <div className="album__images__container">
        <img className="album__cover" src={AlbumCover01} alt="" />
        <img className="album__disc" src={VinylDisc01} alt="" />
      </div>
      <h3 className="album__title">Royal Blood</h3>
      <span className="album__year">2023</span>
    </article>
  );
};
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
        <div className="flex flex-col justify-center items-center gap-24 md:flex-row w-full xl:w-5/6">
          <Album />
          <Album />
          <Album />
        </div>
      </article>
    </section>
  );
};

export default Albums;
