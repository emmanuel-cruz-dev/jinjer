import { useTranslation } from "react-i18next";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import InstaImg1 from "../assets/images/insta-01.jpg";

import TwitterImg1 from "../assets/images/twitter-01.jpeg";

const colors = {
  cyan: "bg-cyan-500 hover:bg-cyan-600",
};

const Anchor = ({ icon, color }) => {
  const { t } = useTranslation();
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
      {t("follow.followButton")} N3
    </a>
  );
};

const PostCards = ({ user, message }) => {
  return (
    <div className="flex items-center gap-4">
      <img className="w-14 md:w-16" src={TwitterImg1} alt="" />
      <p className="leading-relaxed text-sm md:text-base">
        <span className="font-bold">@{user}</span> {message}
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
            {t("follow.title1")}
            <span>{t("follow.titleSpan")}</span>
            {t("follow.title2")}
          </h2>
          <p className="text-lg">{t("follow.description")}.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1 border border-slate-700 p-4">
            <div className="flex justify-between items-center py-4 lg:p-4">
              <div className="flex text-center gap-8">
                <p className="flex flex-col">
                  <span className="follow__social__number">410</span>
                  <span className="follow__social__text">
                    {t("follow.posts")}
                  </span>
                </p>
                <p className="flex flex-col">
                  <span className="follow__social__number">230K</span>
                  <span className="follow__social__text">
                    {t("follow.followers")}
                  </span>
                </p>
              </div>

              <span>
                <Anchor color="slate" icon={<FaInstagram />} />
              </span>
            </div>
            <div className="follow__img__grid-container grid grid-cols-3 gap-4">
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
            <div className="flex justify-between items-center py-4 lg:p-4 border-b border-slate-700">
              <div className="flex text-center gap-8">
                <p className="flex flex-col">
                  <span className="follow__social__number">759</span>
                  <span className="follow__social__text">Tweets</span>
                </p>
                <p className="flex-col hidden lg:flex">
                  <span className="follow__social__number">332</span>
                  <span className="follow__social__text">
                    {t("follow.following")}
                  </span>
                </p>
                <p className="flex flex-col">
                  <span className="follow__social__number">400K</span>
                  <span className="follow__social__text">
                    {t("follow.followers")}
                  </span>
                </p>
              </div>

              <span>
                <Anchor color="cyan" icon={<FaXTwitter />} />
              </span>
            </div>
            <div className="grid grid-rows-3 gap-10">
              <PostCards user="rockamring" message={t("follow.rockAmRing")} />
              <PostCards
                user="carlastonecold"
                message={t("follow.carlaStoneCold")}
              />
              <PostCards
                user="indierockfest"
                message={t("follow.indieRockFest")}
              />

              <PostCards
                user="musicloverzack"
                message={t("follow.musicLoverZack")}
              />
              <PostCards user="sophiajones" message={t("follow.sophiaJones")} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Follow;
