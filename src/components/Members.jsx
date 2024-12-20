import ItemsRender from "./ItemsRender";
import membersData from "../data/membersData.json";

const Members = () => {
  return (
    <>
      <ItemsRender
        title="Members"
        obj={membersData}
        route="members"
        formVideo={true}
      />
    </>
  );
};

export default Members;
