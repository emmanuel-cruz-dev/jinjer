import { useState, useRef, useEffect } from "react";
import Background from "../assets/images/gradient.png";
import Wallflowers from "../assets/images/wallflowers.webp";
import Song1 from "../assets/album/song1.mp3";
import Song2 from "../assets/album/song2.mp3";
import Song3 from "../assets/album/song3.mp3";
import Song4 from "../assets/album/song4.mp3";
import Song5 from "../assets/album/song5.mp3";
import Song6 from "../assets/album/song6.mp3";
import Song7 from "../assets/album/song7.mp3";
import Song8 from "../assets/album/song8.mp3";
import Song9 from "../assets/album/song9.mp3";
import Song10 from "../assets/album/song10.mp3";
import Song11 from "../assets/album/song11.mp3";

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
    src: `${Song1}`,
  },
  {
    id: 2,
    title: "Colossus",
    duration: "03:37",
    src: `${Song2}`,
  },
  {
    id: 3,
    title: "Vortex",
    duration: "04:02",
    src: `${Song3}`,
  },
  {
    id: 4,
    title: "Disclosure!",
    duration: "03:47",
    src: `${Song4}`,
  },
  {
    id: 5,
    title: "Copycat",
    duration: "04:23",
    src: `${Song5}`,
  },
  {
    id: 6,
    title: "Pearls and Swine",
    duration: "05:20",
    src: `${Song6}`,
  },
  {
    id: 7,
    title: "Sleep of the Righteous",
    duration: "04:32",
    src: `${Song7}`,
  },
  {
    id: 8,
    title: "Wallflower",
    duration: "04:17",
    src: `${Song8}`,
  },
  {
    id: 9,
    title: "Dead Hands Feel no Pain",
    duration: "04:09",
    src: `${Song9}`,
  },
  {
    id: 10,
    title: "As I Boil Ice",
    duration: "04:21",
    src: `${Song10}`,
  },
  {
    id: 11,
    title: "Mediator",
    duration: "04:29",
    src: `${Song11}`,
  },
];

const Music = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); // Estado para almacenar el tiempo transcurrido

  const formatTime = (seconds) => {
    // Función para convertir los segundos en formato mm:ss
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime); // Actualizar el estado con el tiempo actual
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicList.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? musicList.length - 1 : prevTrack - 1
    );
  };

  const handleCurrentSong = (num) => {
    setCurrentTrack(num);
    handlePlayPause();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const currentSong = musicList[currentTrack];

  const handleMenuVisible = () => {
    setIsVisible(!isVisible);
  };

  const ListItem = () => {
    return (
      <ol>
        {musicList.map((item) => (
          <li
            onClick={() => handleCurrentSong(item.id)}
            className={`music__item-list text-sm p-1 px-4 hover:bg-gray-900 rounded-md cursor-pointer`}
            key={item.id}
            title={isPlaying ? "Pause Song" : "Play Song"}
          >
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-4 items-center">
                <div className="music__number__container w-3 relative text-center">
                  <span className="music__number__song text-gray-400">
                    {item.id}
                  </span>
                  <span className="music__number__play-icon absolute top-0 -left-1 text-white text-xl opacity-0">
                    {isPlaying ? <FaPause /> : <FaPlay />}
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
          <article className="w-full py-8 md:p-12 xl:pt-28 gap-12 flex flex-col items-center">
            <div className="flex justify-center gap-2">
              <figure className="w-96 hidden lg:block">
                <img
                  className="w-full"
                  src={Wallflowers}
                  alt="Portada del álbum Wallflowers"
                  width="500"
                  height="500"
                />
              </figure>
              <div className="w-[22rem] md:w-auto h-96 flex flex-col relative rounded-lg overflow-hidden">
                <div className="flex flex-col gap-2 bg-gray-600 p-4">
                  <div className="flex gap-3 items-center relative">
                    <a
                      href="#"
                      className="text-2xl absolute top-1 right-1"
                      title="Spotify"
                    >
                      <FaSpotify />
                    </a>
                    <img
                      className="w-[6.8rem] rounded-xl"
                      src={Wallflowers}
                      alt="Portada del álbum Wallflowers"
                      width="500"
                      height="500"
                    />
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
                        Save on Spotify
                      </p>
                    </div>
                  </div>
                  <div className="music-player__controls flex justify-between items-center">
                    <div className="flex items-center">
                      <button
                        onClick={handlePrevious}
                        className="opacity-80 hover:opacity-100 border-none text-xl focus:outline-none"
                        title="Previous"
                      >
                        <FaBackwardStep />
                      </button>
                      <div className="music-player__progress-bar"></div>
                      <button
                        onClick={handleNext}
                        className="opacity-80 hover:opacity-100 border-none text-xl focus:outline-none"
                        title="Next"
                      >
                        <FaForwardStep />
                      </button>
                    </div>
                    <span>{formatTime(currentTime)}</span>
                    <button
                      onClick={handleMenuVisible}
                      className="music-player__more flex items-center border-none hover:scale-110 transition-all duration-300"
                      title="More"
                    >
                      <span className="material-symbols-outlined opacity-80 hover:opacity-100">
                        more_horiz
                      </span>
                    </button>
                    <button
                      onClick={handlePlayPause}
                      className="rounded-full bg-white p-2 text-gray-600 w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 focus:outline-none"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    {/* Audio elemento (oculto) */}
                    <audio
                      ref={audioRef}
                      src={currentSong.src}
                      onEnded={handleNext}
                      onTimeUpdate={handleTimeUpdate}
                    />
                  </div>
                </div>
                <div className="bg-gray-800 p-2 overflow-y-scroll">
                  <ListItem />
                </div>
                <div
                  className={`${
                    isVisible ? "flex" : "hidden"
                  } absolute bg-gray-900 w-full h-full flex-col justify-between items-center p-4 text-center`}
                >
                  <div className="flex justify-end w-full">
                    <span
                      onClick={handleMenuVisible}
                      title="Close"
                      className={`material-symbols-outlined text-3xl font-semibold cursor-pointer hover:scale-105 transition-all duration-300`}
                    >
                      close
                    </span>
                  </div>
                  <div className="music-player__actions-menu flex flex-col gap-2 mb-4">
                    <a href="#">
                      <FaSpotify size={20} /> Play on Spotify
                    </a>
                    <a href="#">
                      <span className="material-symbols-outlined text-xl">
                        add_circle
                      </span>
                      Save on Spotify
                    </a>
                    <a href="#">
                      <span className="material-symbols-outlined text-xl">
                        share
                      </span>
                      Copy link
                    </a>
                  </div>
                  <div className="flex text-sm justify-center gap-1">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                    <span className="font-extrabold">·</span>
                    <a href="#" className="hover:underline">
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-4xl font-bold uppercase text-center">
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
                  <ul className="absolute top-10 w-40 bg-white text-black p-4 px-8 rounded-sm normal-case text-center text-base flex-col gap-2 hidden">
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
                  <ul className="absolute top-10 w-40 bg-white text-black p-4 px-8 rounded-sm normal-case text-center text-base flex-col gap-2 hidden">
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
