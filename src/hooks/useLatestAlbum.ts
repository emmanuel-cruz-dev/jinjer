import { useState } from "react";

const useLatestAlbum = () => {
  const [isLatestAlbumOpen, setIsLatestAlbumOpen] = useState(false);
  const toggleLatestAlbum = () => {
    setIsLatestAlbumOpen(!isLatestAlbumOpen);
  };

  return { isLatestAlbumOpen, toggleLatestAlbum, setIsLatestAlbumOpen };
};

export default useLatestAlbum;
