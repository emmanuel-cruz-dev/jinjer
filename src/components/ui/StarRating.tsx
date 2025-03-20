import { FC } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { StarRatingProps } from "../../types/types";

const StarRating: FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) =>
    index < rating ? (
      <FaStar key={index} color="#ffc107" />
    ) : (
      <FaRegStar key={index} color="#e4e5e9" />
    )
  );
  return <div className="flex">{stars}</div>;
};

export default StarRating;
