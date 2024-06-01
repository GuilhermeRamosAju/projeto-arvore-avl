import React from "react";
import "./styles.css";

type CreationButtonProps = {
  onClick: () => void;
  type: "start" | "insert" | "reset";
  text: string;
};

const CreationButton: React.FC<CreationButtonProps> = ({
  onClick,
  type,
  text,
}) => {
  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default CreationButton;
