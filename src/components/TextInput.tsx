import { useState } from "react";

interface TextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextInput({ label, value, setValue }: TextInputProps) {
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
      <input
        type="text"
        defaultValue={value}
        onChange={onInputChange}
        placeholder={`${isFocus ? "" : ">"}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
