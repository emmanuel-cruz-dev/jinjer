import Music from "./Music";
import Wallflowers from "../assets/images/wallflowers.webp";
import AliveInMelbourne from "../assets/images/melb.webp";
import Macro from "../assets/images/macro.webp";
import CloudFactory from "../assets/images/cf.webp";
import KingOfEverything from "../assets/images/koe.webp";
import Inhale from "../assets/images/idb.webp";

const articles = [
  {
    id: 1,
    title: "Wallflowers",
    year: "2021",
    image: Wallflowers,
  },
  {
    id: 2,
    title: "Alive in Melbourne",
    year: "2020",
    image: AliveInMelbourne,
  },
  {
    id: 3,
    title: "Macro",
    year: "2019",
    image: Macro,
  },
  {
    id: 4,
    title: "Cloud Factory",
    year: "2018",
    image: CloudFactory,
  },
  {
    id: 5,
    title: "King of Everything",
    year: "2016",
    image: KingOfEverything,
  },
  {
    id: 6,
    title: "Inhale, Don't Breathe",
    year: "2012",
    image: Inhale,
  },
];

const MusicRender = () => {
  return (
    <>
      {articles.map((article) => (
        <Music key={article.id} {...article} />
      ))}
    </>
  );
};

export default MusicRender;
