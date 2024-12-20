import ItemsRender from "./ItemsRender";
import membersData from "../data/membersData.json";

const Members = () => {
  return (
    <>
      <ItemsRender
        title="Members"
        obj={membersData}
        route="members"
        image={true}
      />
    </>
  );
};

export default Members;
