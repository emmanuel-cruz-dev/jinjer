import LanguageSwitch from "./LanguageSwitch";
import BackImage from "../assets/images/bg1.jpg";

const Hero = () => {
  return (
    <section>
      <div className="w-full h-full">
        <img src={BackImage} alt="" />
      </div>
      <div className="hidden lg:block fixed top-24 right-6">
        <LanguageSwitch />
      </div>
    </section>
  );
};

export default Hero;
