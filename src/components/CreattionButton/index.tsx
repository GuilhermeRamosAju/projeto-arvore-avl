import React from "react";
import "./styles.css";

type CreattionButtonProps = {
  onClick: () => void;
  type: "start" | "insert" | "reset";
  text: string;
};

const CreattionButton: React.FC<CreattionButtonProps> = ({
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

export default CreattionButton;
