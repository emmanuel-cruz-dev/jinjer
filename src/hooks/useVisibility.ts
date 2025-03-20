import { useState } from "react";

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return { isVisible, toggleVisibility };
};

export default useVisibility;
