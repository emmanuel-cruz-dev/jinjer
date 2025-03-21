import { FC } from "react";
import { TitleArticleProps } from "../../types/types";

const TitleArticle: FC<TitleArticleProps> = ({ title }) => {
  return (
    <article className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="hero__title bg-accent/90 flex justify-center items-center mx-auto border-4 rounded-[1px] border-footer -rotate-6">
        <span className="uppercase font-semibold whitespace-nowrap text-2xl px-16 py-2 lg:text-4xl lg:px-28 lg:py-4">
          {title}
        </span>
      </div>
    </article>
  );
};

export default TitleArticle;
