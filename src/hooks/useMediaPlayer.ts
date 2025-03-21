import { useState, useRef, useEffect, ChangeEvent } from "react";
import { UseMediaPlayerProps } from "../types/types";

const useMediaPlayer = ({ musicList }: UseMediaPlayerProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0); // Estado para almacenar el tiempo transcurrido
  const [duration, setDuration] = useState(0); // Estado para almacenar la duración de la canción
  const [currentSongItem, setCurrentSongItem] = useState<number | null>(null);

  const playSong = (id: number) => {
    if (audioRef.current) {
      if (currentSongItem === id) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        setCurrentTrack(id - 1);
        setCurrentSongItem(id);
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      setCurrentSongItem(currentTrack + 1);
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicList.length);
    const id = currentTrack + 1 === musicList.length ? 1 : currentTrack + 2;
    setCurrentSongItem(id);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.play();
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? musicList.length - 1 : prevTrack - 1
    );
    const id = currentTrack === 0 ? musicList.length : currentTrack;
    setCurrentSongItem(id);
  };

  const formatTime = (seconds: number) => {
    // Función para convertir los segundos en formato mm:ss
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const remainingTime = `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    return remainingTime;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime); // Actualizar el estado con el tiempo actual
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration); // Actualizar el estado con la duración de la canción
    }
  };

  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = (e.target.valueAsNumber / 100) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const calculateProgress = () => {
    return duration > 0 ? (currentTime / duration) * 100 : 0;
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  const currentSong = musicList[currentTrack];

  return {
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
  };
};

export default useMediaPlayer;
