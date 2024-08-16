import ButtonTemplate from "./ButtonTemplate";
import VisibilityIcon from "@mui/icons-material/Visibility";

const OverviewButton = () => {
  return (
    <ButtonTemplate
      text="Overview"
      icon={<VisibilityIcon />}
      buttonId="overview"
    />
  );
};

export default OverviewButton;
