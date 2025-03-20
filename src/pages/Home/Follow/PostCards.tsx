import { FC } from "react";
import { PostCardsProps } from "../../../types/types";

const PostCards: FC<PostCardsProps> = ({ img, user, message }) => {
  return (
    <article className="flex items-center gap-4">
      <img
        className="w-14 md:w-16"
        width="300"
        height="300"
        src={img}
        alt={`Imagen de twitter/X, usuario: ${user}`}
        loading="lazy"
      />
      <p className="leading-relaxed text-sm md:text-base text-gray-400">
        <span className="font-bold text-gray-300">@{user}</span> {message}
      </p>
    </article>
  );
};

export default PostCards;
