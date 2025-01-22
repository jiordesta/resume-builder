import { useState } from "react";
import { MyResume } from "../../libs/types/forms";
import { handleMyResumeFormChanges } from "../../utilities/handleFormChanges";

interface TextInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  dkey: string;
  placeholder?: string;
}

export default function TextInput({
  label,
  resumeForm,
  setResumeForm,
  dkey,
  placeholder,
}: TextInputProps) {
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
