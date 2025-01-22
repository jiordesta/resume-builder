import { useEffect, useState } from "react";
import { handleInput } from "../utilities/handleInputs";
import { MyForm } from "../libs/types/forms";

interface SkillsInputProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
}

export default function Skills({
  label,
  form,
  setForm,
  dkey,
}: SkillsInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={`${
        isFocus ? "bg-opacity-5" : "bg-opacity-10"
      } bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300`}
    >
      <h1 className="glowText uppercase">{label}</h1>
    </div>
  );
}
