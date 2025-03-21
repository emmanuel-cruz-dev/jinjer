import { membersData } from "../data/membersData";
import MediaItemsRender from "../pages/MediaItems/MediaItemsRender";

function Members() {
  return (
    <MediaItemsRender
      title="Members"
      arr={membersData}
      route="members"
      image={true}
    />
  );
}

export default Members;
