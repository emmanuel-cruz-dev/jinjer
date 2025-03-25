import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import CoverAlbum from "../../assets/images/duelep.webp";
import useScrollDisplay from "../../hooks/useScrollDisplay";
import { songsList } from "../../data/songsList";
import useMusicPLayer from "../../hooks/useMusicPlayer";
import useMenu from "../../hooks/useMenu";

function MusicPlayer() {
  const { t } = useTranslation();
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isVisible } = useScrollDisplay();
  const {
    handlePlayPause,
    handleNext,
    handlePrevious,
    isPlaying,
    audioRef,
    currentSong,
  } = useMusicPLayer({ songsList });

  return (
    <article className={`${isVisible ? "opacity-100" : "opacity-0"}`}>
      <article className="music-player__article fixed bottom-4 left-2 lg:left-8 flex gap-[6px] z-[100] select-none">
        <div
          className={`music-player__container ${
            isMenuOpen ? "" : "active"
          } hidden lg:flex justify-between items-center rounded-md bg-gray-800 text-white p-3`}
        >
          {/* Imagen de portada */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div>
              <img
                src={CoverAlbum}
                alt="Portada del álbum Duel"
                title={t("musicPlayer.albumCover")}
                className="cover rounded-sm"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>

            {/* Información de la canción */}
            <div className="music-player__text flex-grow">
              <h3
                className="text-sm font-semibold"
                title={t("musicPlayer.songTitle")}
              >
                {currentSong.title}
              </h3>
              <p
                className="text-[12px] text-gray-400"
                title={t("musicPlayer.artist")}
              >
                Jinjer
              </p>
            </div>
          </div>

          {/* Controles de reproducción */}
          <div className="music-player__controls items-center space-x-1">
            <button
              title={t("musicPlayer.prev")}
              onClick={handlePrevious}
              className="hover:bg-gray-700 p-2 rounded border-none"
            >
              <FaBackwardStep size={18} />
            </button>

            <button
              title={isPlaying ? t("musicPlayer.pause") : t("musicPlayer.play")}
              onClick={handlePlayPause}
              className="bg-accent hover:bg-black p-[.55rem] rounded-full transition-colors duration-300 border-none"
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>

            <button
              onClick={handleNext}
              title={t("musicPlayer.next")}
              className="hover:bg-gray-700 p-2 rounded border-none"
            >
              <FaForwardStep size={18} />
            </button>
          </div>

          {/* Audio elemento (oculto) */}
          <audio ref={audioRef} src={currentSong.src} onEnded={handleNext} />
        </div>

        <span
          title={
            isMenuOpen ? t("musicPlayer.expand") : t("musicPlayer.collapse")
          }
          className="music-player__close-open"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </span>
      </article>
    </article>
  );
}

export default MusicPlayer;
