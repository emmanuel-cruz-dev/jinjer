import { FC } from "react";
import useGoToSection from "../../hooks/useGoToSection";
import { AnchorItemProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const AnchorItem: FC<AnchorItemProps> = ({ title, id }) => {
  const goToSection = useGoToSection();
  const { t } = useTranslation();

  return (
    <a
      className="table__venue"
      href={`/tour/${id}`}
      onClick={() => goToSection(`/tour/`, `${id}`)}
      title={t("news.seeDetails")}
    >
      {title}
    </a>
  );
};

export default AnchorItem;
