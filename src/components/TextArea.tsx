import { useState } from "react";
import { MyForm } from "../libs/types/forms";
import { handleInput } from "../utilities/handleInputs";

interface TextAreaProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
  rows: number;
}

export default function TextArea({
  label,
  form,
  setForm,
  dkey,
  rows,
}: TextAreaProps) {
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
      <textarea
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
