import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
import Song1 from "../assets/songs/song1.mp3";
import Song2 from "../assets/songs/song2.mp3";
import Song3 from "../assets/songs/song3.mp3";
import Song4 from "../assets/songs/song4.mp3";
import Song5 from "../assets/songs/song5.mp3";
import Song6 from "../assets/songs/song6.mp3";
import Song7 from "../assets/songs/song7.mp3";
import Song8 from "../assets/songs/song8.mp3";
import Song9 from "../assets/songs/song9.mp3";
import Song10 from "../assets/songs/song10.mp3";
import Song11 from "../assets/songs/song11.mp3";
import Song12 from "../assets/songs/song12.mp3";

import CoverAlbum from "../assets/images/hollow-thrones.jpg";

// Lista de canciones (puedes expandir esto)
const musicList = [
  {
    title: "01 Dancer in the Sun",
    src: `${Song1}`,
  },
  {
    title: "02 Play with Fire",
    src: `${Song2}`,
  },
  {
    title: "03 The Smash Song",
    src: `${Song3}`,
  },
  {
    title: "04 Vodka, Tribe & Dynamite",
    src: `${Song4}`,
  },
  {
    title: "05 A tu Control",
    src: `${Song5}`,
  },
  {
    title: "06 Coming Home",
    src: `${Song6}`,
  },
  {
    title: "07 Niemandmensch",
    src: `${Song7}`,
  },
  {
    title: "08 Everytime(Zawsze)",
    src: `${Song8}`,
  },
  {
    title: "09 On the Run",
    src: `${Song9}`,
  },
  {
    title: "10 Boomerang",
    src: `${Song10}`,
  },
  {
    title: "11 Chameleon",
    src: `${Song11}`,
  },
  {
    title: "12 Phono Sapiens",
    src: `${Song12}`,
  },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const currentSong = musicList[currentTrack];

  return (
    <div className="fixed bottom-2 left-1 w-[22rem] rounded-md bg-gray-800 text-white p-3 flex  items-center z-50">
      {/* Imagen de portada */}
      <div className="mr-3">
        <img
          src={CoverAlbum}
          alt="Album Cover"
          className="w-14 h-14 object-cover rounded-sm"
        />
      </div>

      {/* Información de la canción */}
      <div className="flex-grow">
        <h3 className="text-sm font-semibold">{currentSong.title}</h3>
        <p className="text-[12px] text-gray-400">N3phews</p>
      </div>

      {/* Controles de reproducción */}
      <div className="flex items-center space-x-0.5">
        <button
          onClick={handlePrevious}
          className="hover:bg-gray-700 p-2 rounded"
        >
          <FaBackwardStep size={18} />
        </button>

        <button
          onClick={handlePlayPause}
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full"
        >
          {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
        </button>

        <button onClick={handleNext} className="hover:bg-gray-700 p-2 rounded">
          <FaForwardStep size={18} />
        </button>
      </div>

      {/* Audio elemento (oculto) */}
      <audio ref={audioRef} src={currentSong.src} onEnded={handleNext} />
    </div>
  );
};

export default MusicPlayer;
