import { useTranslation } from "react-i18next";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import InstaImg1 from "../assets/images/insta-01.jpg";

import TwitterImg1 from "../assets/images/twitter-01.jpeg";

const colors = {
  cyan: "bg-cyan-500 hover:bg-cyan-600",
};

const Anchor = ({ icon, color }) => {
  const colorClasses = colors[color] || "bg-gray-500 hover:bg-gray-600";

  return (
    <a
      href="#"
      className={`relative flex gap-5 px-3 py-2 text-gray-200 hover:text-white ${colorClasses} transition-colors duration-300`}
    >
      <span className="text-2xl">
        <span className="follow__anchor__icon__line"></span>
        {icon}
      </span>
      Follow N3
    </a>
  );
};

const PostCards = () => {
  return (
    <div className="flex items-center gap-4">
      <img className="w-16" src={TwitterImg1} alt="" />
      <p className="xl:text-[17px] leading-8 opacity-70">
        <span>@rockandcoke</span> The N3phews group in Rock'n'Coke 2023
        Festival! #N3phews #N3phewsGroup
      </p>
    </div>
  );
};

const Follow = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin follow py-16 mx-auto" id="follow">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            Follow N<span>3</span>
          </h2>
          <p className="text-lg">
            Our latest videos, audios on our official Youtube channel! Don't
            forget subscribe us!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-1 border border-slate-700 p-4">
            <div className="flex justify-between items-center p-4">
              <div className="flex text-center gap-8">
                <p className="flex flex-col">
                  <span className="follow__social__number">410</span>
                  <span className="follow__social__text">Posts</span>
                </p>
                <p className="flex flex-col">
                  <span className="follow__social__number">230K</span>
                  <span className="follow__social__text">Followers</span>
                </p>
              </div>

              <span>
                <Anchor color="slate" icon={<FaInstagram />} />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
              <img src={InstaImg1} alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <div className="flex text-center gap-8">
                <p className="flex flex-col">
                  <span className="follow__social__number">759</span>
                  <span className="follow__social__text">Tweets</span>
                </p>
                <p className="flex-col hidden lg:flex">
                  <span className="follow__social__number">332</span>
                  <span className="follow__social__text">Following</span>
                </p>
                <p className="flex flex-col">
                  <span className="follow__social__number">400K</span>
                  <span className="follow__social__text">Followers</span>
                </p>
              </div>

              <span>
                <Anchor color="cyan" icon={<FaXTwitter />} />
              </span>
            </div>
            <div className="grid grid-rows-3 gap-10">
              <PostCards />
              <PostCards />
              <PostCards />
              <PostCards />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Follow;
