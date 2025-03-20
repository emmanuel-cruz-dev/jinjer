import { useState, useRef, useEffect } from "react";
import { UseMusicPlayerProps } from "../types/types";

const useMusicPLayer = ({ songsList }: UseMusicPlayerProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const currentSong = songsList[currentTrack];

  return {
    handlePlayPause,
    handleNext,
    handlePrevious,
    isPlaying,
    audioRef,
    currentSong,
  };
};

export default useMusicPLayer;
