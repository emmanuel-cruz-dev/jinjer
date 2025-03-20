import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import CoverAlbum from "../../assets/images/duelep.webp";
import useScrollDisplay from "../../hooks/useScrollDisplay";
import { songsList } from "../../data/songsList";

const MusicPlayer = () => {
  const { t } = useTranslation();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef(null);
  const { isVisible } = useScrollDisplay();

  const handleOpenMusicPlayer = () => {
    setIsOpen(!isOpen);
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
    setCurrentTrack((prevTrack) => (prevTrack + 1) % songsList.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? songsList.length - 1 : prevTrack - 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const currentSong = songsList[currentTrack];

  return (
    <article className={`${isVisible ? "opacity-100" : "opacity-0"}`}>
      <article className="music-player__article fixed bottom-3 left-2 flex gap-[6px] z-[100] select-none">
        <div
          className={`music-player__container ${
            isOpen ? "active" : ""
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
              className="bg-accent hover:bg-black p-3 rounded-full transition-colors duration-300 border-none"
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
          title={isOpen ? t("musicPlayer.collapse") : t("musicPlayer.expand")}
          className="music-player__close-open material-symbols-outlined"
          onClick={handleOpenMusicPlayer}
        >
          {isOpen ? "keyboard_arrow_left" : "keyboard_arrow_right"}
        </span>
      </article>
    </article>
  );
};

export default MusicPlayer;
