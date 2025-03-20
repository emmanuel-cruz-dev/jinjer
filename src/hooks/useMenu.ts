import { useState } from "react";

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return { isMenuOpen, toggleMenu };
};

export default useMenu;
