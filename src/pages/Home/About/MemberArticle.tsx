import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MemberArticleProps } from "../../../types/types";
import useGoToSection from "../../../hooks/useGoToSection";

const MemberArticle: FC<MemberArticleProps> = ({
  image,
  icon,
  name,
  instrument,
  id,
}) => {
  const goToSection = useGoToSection();
  const { t } = useTranslation();

  return (
    <a
      href={`/members/${id}`}
      onClick={() => goToSection(`/members/`, `${id}`)}
      className="about__members__article"
      title={t("news.seeDetails")}
    >
      <div className="about__members__image-container">
        <figure className="about__members__logo-container">
          <img
            className="about__members__logo-image"
            width="300"
            height="300"
            src={icon}
            alt="Instrumento musical"
            loading="lazy"
          />
        </figure>
        <img
          className="about__members__image"
          width="300"
          height="300"
          src={image}
          alt={`${name}`}
          title={`${name}`}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4>{instrument}</h4>
        <h5>{name}</h5>
      </div>
    </a>
  );
};

export default MemberArticle;
