import { useNavigate } from "react-router-dom";

const useGoToSection = () => {
  const navigate = useNavigate();

  return (path: string, sectionId: string): void => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };
};

export default useGoToSection;
