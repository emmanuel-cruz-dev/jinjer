import Background from "../assets/images/gradient.png";
import Wallflowers from "../assets/images/wallflowers.jpg";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
  FaSpotify,
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

const ListItem = () => {
  return (
    <ol>
      {musicList.map((item) => (
        <li
          className="music__item-list text-sm p-1 px-2 hover:bg-accent/70 rounded-md cursor-pointer"
          key={item.id}
        >
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-4 items-center">
              <div className="music__number__container w-3 relative text-center">
                <span className="music__number__song text-gray-400">
                  {item.id}
                </span>
                <span className="music__number__play-icon absolute top-0 -left-1 text-white text-xl opacity-0">
                  <FaPlay />
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <span className="text-gray-400 text-[13px]">Jinjer</span>
              </div>
            </div>
            <span className="text-gray-400">{item.duration}</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

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
          <article className="w-full p-12 gap-8 flex flex-col items-center">
            <div className="flex justify-center gap-2">
              <figure className="w-96">
                <img className="w-full" src={Wallflowers} alt="" />
              </figure>
              <div className="h-96 flex flex-col">
                <div className="flex flex-col gap-2 bg-gray-600 p-4 rounded-t-lg">
                  <div className="flex gap-2 items-center relative">
                    <a href="#" className="text-3xl absolute top-0 right-0">
                      <FaSpotify />
                    </a>
                    <img className="w-24 rounded-xl" src={Wallflowers} alt="" />
                    <div className="flex flex-col gap-1">
                      <div>
                        <a href="#" className="hover:underline">
                          <h4 className="font-bold text-lg">Wallflowers</h4>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 text-sm hover:underline"
                        >
                          Jinjer
                        </a>
                      </div>
                      <p className="flex items-center text-sm text-gray-300 gap-1 hover:scale-105 cursor-pointer transition-all duration-300">
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
                    <button className="rounded-full bg-white p-2 text-gray-600 w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300">
                      {/* <FaPause /> */}
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-b-lg overflow-y-scroll">
                  <ListItem />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-4xl font-bold uppercase">
                WallFlowers (2021)
              </h3>
              <div className="flex gap-6 uppercase text-xl">
                <div className="music__links__download-stream flex flex-col items-center gap-2 relative py-2">
                  <a
                    href="#"
                    className="music__links__download-stream__anchor flex items-center"
                  >
                    Download
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                  </a>
                  <ul className="absolute top-10 w-40 bg-white text-black p-4 px-8 rounded-md normal-case text-center text-base flex-col gap-2 hidden">
                    <li>
                      <a href="#">Amazon</a>
                    </li>
                    <li>
                      <a href="#">Bandcamp</a>
                    </li>
                    <li>
                      <a href="#">Google Play</a>
                    </li>
                  </ul>
                </div>
                <div className="music__links__download-stream flex flex-col items-center gap-2 relative py-2">
                  <a
                    href="#"
                    className="music__links__download-stream__anchor flex items-center"
                  >
                    Stream
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                  </a>
                  <ul className="absolute top-10 w-40 bg-white text-black p-4 px-8 rounded-md normal-case text-center text-base flex-col gap-2 hidden">
                    <li>
                      <a href="#">Spotify</a>
                    </li>
                    <li>
                      <a href="#">Apple Music</a>
                    </li>
                    <li>
                      <a href="#">Deezer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Music;