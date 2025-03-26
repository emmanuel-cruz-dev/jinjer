import { useTranslation } from "react-i18next";
import { membersData } from "../data/membersData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function Members() {
  const { t } = useTranslation();

  return (
    <MediaItemsRender
      title={t("members.title")}
      arr={membersData}
      route="members"
      image={true}
    />
  );
}

export default Members;
