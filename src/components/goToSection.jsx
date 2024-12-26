import { useNavigate } from "react-router-dom";

const goToSection = (path, sectionId) => {
  const navigate = useNavigate();
  navigate(path);

  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    else section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 500);
};

export default goToSection;
