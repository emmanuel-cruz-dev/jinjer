import Background from "../assets/images/gradient.png";
import Wallflowers from "../assets/images/wallflowers.jpg";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";

const musicList = [
  {
    id: 1,
    title: "Call me a Symbol",
    duration: "04:20",
  },
  {
    id: 2,
    title: "Colossus",
    duration: "03:36",
  },
  {
    id: 3,
    title: "Vortex",
    duration: "04:02",
  },
  {
    id: 4,
    title: "Disclosure!",
    duration: "03:47",
  },
  {
    id: 5,
    title: "Copycat",
    duration: "04:23",
  },
  {
    id: 6,
    title: "Pearls and Swine",
    duration: "05:20",
  },
  {
    id: 7,
    title: "Sleep of the Righteous",
    duration: "04:32",
  },
  {
    id: 8,
    title: "Wallflower",
    duration: "04:17",
  },
  {
    id: 9,
    title: "Dead Hands Feel no Pain",
    duration: "04:09",
  },
  {
    id: 10,
    title: "As I Boil Ice",
    duration: "04:21",
  },
  {
    id: 11,
    title: "Mediator",
    duration: "04:29",
  },
];

const Music = () => {
  return (
    <section className="music second-page" id="music">
      <article className="py-10">
        <article className="relative w-full mt-20 lg:w-11/12 mb-12 bg-black/90 flex flex-col justify-center items-center mx-auto">
          <img
            className="absolute top-0 left-0 w-full h-24 object-cover bg-accent/60"
            src={Background}
            alt=""
          />
          <div className="w-full px-12 p-8 z-[1]">
            <h2 className="text-3xl font-bold text-white">
              Music: Wallflowers
            </h2>
          </div>
          <article className="w-full p-12 gap-4">
            <div className="flex justify-center gap-2">
              <figure className="w-96">
                <img className="w-full" src={Wallflowers} alt="" />
              </figure>
              <div>
                <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-t-lg">
                  <div className="flex gap-2">
                    <img className="w-24 rounded-xl" src={Wallflowers} alt="" />
                    <div className="flex flex-col">
                      <h4>Wallflowers</h4>
                      <span>Jinjer</span>
                      <p className="flex items-center gap-1">
                        <span className="material-symbols-outlined">
                          add_circle
                        </span>
                        Guardar en Spotify
                      </p>
                    </div>
                  </div>
                  <div className="music-player__controls flex justify-between items-center">
                    <div className="flex items-center">
                      <button>
                        <FaBackwardStep />
                      </button>
                      <div className="music-player__progress-bar">
                        --------------
                      </div>
                      <button>
                        <FaForwardStep />
                      </button>
                    </div>
                    <span>00:00</span>
                    <button className="music-player__more flex items-center">
                      <span class="material-symbols-outlined">more_horiz</span>
                    </button>
                    <button>
                      {/* <FaPause /> */}
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <h3>WallFlowers (2021)</h3>
              <span>Download</span>
              <span>Stream</span>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Music;
