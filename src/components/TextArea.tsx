import { useState } from "react";

interface TextAreaProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  rows: number;
}

export default function TextArea({
  label,
  value,
  setValue,
  rows,
}: TextAreaProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div
      className={`${
        isFocus ? "glowBox bg-opacity-5" : "bg-opacity-10"
      } bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300`}
    >
      <h1 className="glowText uppercase">{label}</h1>
      <textarea
        defaultValue={value}
        onChange={onInputChange}
        placeholder={`${isFocus ? "" : ">"}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        rows={rows}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
