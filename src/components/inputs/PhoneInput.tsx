import { useState } from "react";
import { MyResume } from "../../libs/types/forms";

interface PhoneInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

//THIS IS A FEATURE FOR NOW ILL USE THE NORMAL TEXTINPUT COMPONENT

export default function PhoneInput({
  label,
  resumeForm,
  setResumeForm,
}: PhoneInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={`${
        isFocus ? "bg-opacity-5" : "bg-opacity-10"
      } bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300`}
    >
      <h1 className="glowText uppercase">{label}</h1>
      <div></div>
    </div>
  );
}
