import ButtonTemplate from "./ButtonTemplate";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const ReferencesButton = () => {
  return (
    <ButtonTemplate
      text="References"
      icon={<LibraryBooksIcon />}
      buttonId="references"
    />
  );
};

export default ReferencesButton;
