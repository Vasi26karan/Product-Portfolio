import ButtonTemplate from "./ButtonTemplate";
import PersonIcon from "@mui/icons-material/Person";

const ConsumersButton = () => {
  return (
    <div>
      <ButtonTemplate
        text="Consumers"
        icon={<PersonIcon />}
        buttonId="consumers"
      />
    </div>
  );
};

export default ConsumersButton;
