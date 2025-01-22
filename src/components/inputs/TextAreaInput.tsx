import { useState } from "react";
import { MyResume } from "../../libs/types/forms";
import { handleMyResumeFormChanges } from "../../utilities/handleFormChanges";

interface TextAreaInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  dkey: string;
  rows?: number;
  placeholder?: string;
}

export default function TextAreaInput({
  label,
  resumeForm,
  setResumeForm,
  dkey,
  rows,
  placeholder,
}: TextAreaInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const onInputChange = (e: any) => {
    e.preventDefault();
    const data = {
      [dkey]: e.target.value,
    };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
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
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        rows={rows}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
