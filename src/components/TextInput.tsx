import { useState } from "react";
import { handleInput } from "../utilities/handleInputs";
import { MyForm } from "../libs/types/forms";

interface TextInputProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
  placeholder?: string;
}

export default function TextInput({
  label,
  form,
  setForm,
  dkey,
  placeholder,
}: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onInputChange = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setForm(handleInput(form, e.target.value, dkey));
  };

  return (
    <div
      className={`${
        isFocus ? "bg-opacity-5" : "bg-opacity-10"
      } bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300`}
    >
      <h1 className="glowText uppercase">{label}</h1>
      <input
        type="text"
        onChange={onInputChange}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
