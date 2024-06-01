import React from "react";
import "./styles.css";

type CreationInsertProps = {
  placeholder: string;
  value: number | string;
  onChangeText: (value: string) => void;
};

const CreationInsert: React.FC<CreationInsertProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="text-2xl font-bold text-amber-200 text-center"
        onChange={(e) => onChangeText(e.target.value.replace(/\D/g, ""))}
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      />
      <div className="w-[90%] h-[1px] bg-amber-200"></div>
    </div>
  );
};

export default CreationInsert;
