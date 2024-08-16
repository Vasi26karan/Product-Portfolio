import { MouseEvent } from "react";
import "./ButtonTemplate.scss";
import { useActiveButton } from "../../contexts/ActiveButtonContext";

interface ButtonTemplateProps {
  text: string;
  icon?: JSX.Element;
  buttonId: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonTemplate = ({
  text,
  icon,
  buttonId,
  onClick,
}: ButtonTemplateProps): JSX.Element => {
  const { activeButton, setActiveButton } = useActiveButton();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveButton(buttonId);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`button ${activeButton === buttonId ? "highlighted" : ""}`}
      onClick={handleClick}
    >
      {icon && <span className="buttonIcon">{icon}</span>}
      <span className="buttonText">{text}</span>
    </button>
  );
};

export default ButtonTemplate;
