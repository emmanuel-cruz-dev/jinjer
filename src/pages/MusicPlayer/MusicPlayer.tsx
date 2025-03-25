import { FC } from "react";
import Background from "../../assets/images/gradient.avif";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
  FaSpotify,
  FaChevronRight,
  FaEllipsis,
} from "react-icons/fa6";
import { MdClose, MdAddCircle, MdShare } from "react-icons/md";
import { AlbumItemProps } from "../../types/types";
import ListItem from "./ListItem";
import { musicPlayerList } from "../../data/musicPlayerList";
import { backgroundColors } from "../../data/backgroundColors";
import useMediaPlayer from "../../hooks/useMediaPlayer";
import useMenu from "../../hooks/useMenu";
import { useTranslation } from "react-i18next";

const MusicPlayer: FC<AlbumItemProps> = ({ id, title, year, cover }) => {
  const { t } = useTranslation();
  const { isMenuOpen, toggleMenu } = useMenu();
  const {
    isPlaying,
    audioRef,
    currentTime,
    currentSongItem,
    playSong,
    handlePlayPause,
    handleNext,
    handlePrevious,
    formatTime,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleProgressBarChange,
    calculateProgress,
    currentSong,
  } = useMediaPlayer({ musicList: musicPlayerList });

  let selectColor = year;
  let color1 = backgroundColors[selectColor][0];
  let color2 = backgroundColors[selectColor][1];

  return (
    <section className="music second-page" id="music">
      <article className="py-10 container">
        <article
          key={id}
          className="relative w-full mt-20 lg:w-11/12 mb-12 bg-black/90 flex flex-col justify-center items-center mx-auto"
        >
          <img
            className="absolute top-0 left-0 w-full h-24 object-cover bg-accent/60"
            src={Background}
            alt="Background gradient"
            width="644"
            height="644"
            loading="lazy"
          />
          <div className="w-full px-12 p-8 z-[1]">
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <article className="w-full py-8 xl:pt-28 gap-12 flex flex-col items-center">
            <div className="flex justify-center gap-4">
              <figure className="max-w-96 hidden lg:block">
                <img
                  className="w-full"
                  src={cover}
                  alt="Portada del álbum Wallflowers"
                  width="500"
                  height="500"
                  loading="lazy"
                />
              </figure>
              <div className="w-[22rem] md:w-auto h-[30.5rem] lg:h-96 flex flex-col relative rounded-lg overflow-hidden">
                <div className={`flex flex-col gap-2 ${color1} p-4`}>
                  <div className="flex gap-3 items-center relative">
                    <a
                      href="#"
                      className="text-2xl absolute -top-1 -right-1"
                      title="Spotify"
                    >
                      <FaSpotify />
                    </a>
                    <img
                      className="w-[6.8rem] rounded-xl shadow-lg shadow-black/40"
                      src={cover}
                      alt={`Portada del álbum ${title}`}
                      width="500"
                      height="500"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div>
                        <a href="#" className="hover:underline">
                          <h4 className="font-bold text-lg">{title}</h4>
                        </a>
                        <a
                          href="#"
                          className="opacity-50 text-sm hover:underline"
                        >
                          Jinjer
                        </a>
                      </div>
                      <p className="flex items-center text-sm opacity-90 gap-1 cursor-pointer hover:opacity-100">
                        <span className="text-[18px]">
                          <MdAddCircle />
                        </span>
                        {t("musicPage.saveBtn")}
                      </p>
                    </div>
                  </div>
                  <div className="music-player__controls flex justify-between items-center">
                    <div className="flex items-center">
                      <button
                        onClick={handlePrevious}
                        className="opacity-80 hover:opacity-100 border-none text-xl focus:outline-none"
                        title={t("musicPage.prevBtn")}
                      >
                        <FaBackwardStep />
                      </button>
                      <div className="w-[4.5rem] flex items-center">
                        <input
                          className="progress-bar__input-item"
                          type="range"
                          value={calculateProgress()} // Calcular el progreso de la canción en porcentaje
                          onChange={handleProgressBarChange}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <button
                        onClick={handleNext}
                        className="opacity-80 hover:opacity-100 border-none text-xl focus:outline-none"
                        title={t("musicPage.nextBtn")}
                      >
                        <FaForwardStep />
                      </button>
                    </div>
                    <span>{formatTime(currentTime)}</span>
                    <button
                      onClick={toggleMenu}
                      className="music-player__more flex items-center border-none hover:scale-110 transition-all duration-300"
                      title={t("musicPage.moreMenu")}
                    >
                      <span className="opacity-80 hover:opacity-100">
                        <FaEllipsis />
                      </span>
                    </button>
                    <button
                      onClick={handlePlayPause}
                      className={`rounded-full bg-white p-2 text-slate-800 w-10 h-10 flex justify-center items-center hover:scale-110 transition-all duration-300 focus:outline-none`}
                      title={isPlaying ? t("musicPage.pauseBtn") : "Play"}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    {/* Audio elemento (oculto) */}
                    <audio
                      ref={audioRef}
                      src={currentSong.src}
                      onEnded={handleNext}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                    />
                  </div>
                </div>
                <div className={`${color2} p-2 overflow-y-scroll`}>
                  <ListItem
                    musicList={musicPlayerList}
                    playSong={playSong}
                    isPlaying={isPlaying}
                    currentSong={currentSongItem}
                    color={color1}
                  />
                </div>
                <div
                  className={`${
                    isMenuOpen ? "flex" : "hidden"
                  } absolute ${color1} w-full h-full flex-col justify-between items-center p-4 text-center`}
                >
                  <div className="flex justify-end w-full">
                    <span
                      onClick={toggleMenu}
                      title={t("musicPage.closeMenu")}
                      className={`text-3xl font-semibold cursor-pointer hover:scale-105 transition-all duration-300`}
                    >
                      <MdClose />
                    </span>
                  </div>
                  <div
                    className={`music-player__actions-menu flex flex-col gap-2 mb-4`}
                  >
                    <a href="#">
                      <FaSpotify size={20} /> {t("musicPage.playBtn")}
                    </a>
                    <a href="#">
                      <span className="text-xl">
                        <MdAddCircle />
                      </span>
                      {t("musicPage.saveBtn")}
                    </a>
                    <a href="#">
                      <span className=" text-xl">
                        <MdShare />
                      </span>
                      {t("musicPage.copyBtn")}
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
                {title} ({year})
              </h3>
              <div className="flex gap-6 uppercase text-xl">
                <div className="music__links__download-stream flex flex-col items-center gap-2 relative py-2">
                  <a
                    href="#"
                    className="music__links__download-stream__anchor flex items-center"
                  >
                    Download
                    <span className="text-lg ml-2">
                      <FaChevronRight />
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
                    <span className="text-lg ml-2">
                      <FaChevronRight />
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

export default MusicPlayer;
