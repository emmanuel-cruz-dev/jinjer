import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const Hero = () => {
  return (
    <section>
      <div className="w-full h-full">
        <img src="./src/assets/images/bg1.jpg" alt="" />
      </div>
      <div className="hidden lg:block fixed top-24 right-6">
        <LanguageSwitch />
      </div>
    </section>
  );
};

export default Hero;
