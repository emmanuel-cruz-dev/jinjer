import { useTranslation } from "react-i18next";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import TwitterImg1 from "../../../assets/images/twitter-01.webp";
import TwitterImg2 from "../../../assets/images/twitter-02.webp";
import TwitterImg3 from "../../../assets/images/twitter-03.webp";
import TwitterImg4 from "../../../assets/images/twitter-04.webp";
import TwitterImg5 from "../../../assets/images/twitter-05.webp";
import { instagramImages } from "../../../data/instagramImages";
import ImageItem from "./ImageItem";
import AnchorFollow from "./AnchorFollow";
import PostCards from "./PostCards";

function Follow() {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin follow py-16 mx-auto" id="follow">
      <article className="container flex flex-col justify-center items-center gap-12 mx-auto">
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
            <div className="flex justify-between items-center py-4 lg:py-4">
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
                <AnchorFollow color="slate" icon={<FaInstagram />} />
              </span>
            </div>
            <div className="follow__img__grid-container grid grid-cols-3 gap-4">
              {instagramImages.map((image) => (
                <ImageItem key={image.id} img={image.image} />
              ))}
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
                <AnchorFollow color="cyan" icon={<FaXTwitter />} />
              </span>
            </div>
            <div className="grid grid-rows-3 gap-10">
              <PostCards
                img={TwitterImg1}
                user="rockamring"
                message={t("follow.rockAmRing")}
              />
              <PostCards
                img={TwitterImg2}
                user="carlastonecold"
                message={t("follow.carlaStoneCold")}
              />
              <PostCards
                img={TwitterImg3}
                user="indierockfest"
                message={t("follow.indieRockFest")}
              />

              <PostCards
                img={TwitterImg4}
                user="musicloverzack"
                message={t("follow.musicLoverZack")}
              />
              <PostCards
                img={TwitterImg5}
                user="sophiajones"
                message={t("follow.sophiaJones")}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Follow;
