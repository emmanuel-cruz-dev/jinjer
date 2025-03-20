import { useNavigate } from "react-router-dom";

const useStoreNavigation = () => {
  const navigate = useNavigate();

  const goToSection = () => {
    navigate("/shop/");

    setTimeout(() => {
      const section = document.getElementById("shop");
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };
  return goToSection;
};

export default useStoreNavigation;
