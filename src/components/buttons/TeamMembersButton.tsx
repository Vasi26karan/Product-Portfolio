import ButtonTemplate from "./ButtonTemplate";
import GroupIcon from "@mui/icons-material/Group";

const TeamMembersButton = () => {
  return (
    <ButtonTemplate
      text="Team Members"
      icon={<GroupIcon />}
      buttonId="team-members"
    />
  );
};

export default TeamMembersButton;
