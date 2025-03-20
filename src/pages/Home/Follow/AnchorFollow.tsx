import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AnchorFollowProps, ColorType } from "../../../types/types";

const colors: Record<ColorType, string> = {
  cyan: "bg-cyan-700 hover:bg-cyan-900",
  slate: "bg-slate-800 hover:bg-slate-900",
};

const AnchorFollow: FC<AnchorFollowProps> = ({ icon, color }) => {
  const { t } = useTranslation();
  const colorClasses = colors[color];

  return (
    <a
      href="#"
      className={`relative flex gap-5 px-3 py-2 text-white ${colorClasses} transition-colors duration-300`}
    >
      <span className="text-2xl">
        <span className="follow__anchor__icon__line"></span>
        {icon}
      </span>
      {t("follow.followButton")}
    </a>
  );
};

export default AnchorFollow;
