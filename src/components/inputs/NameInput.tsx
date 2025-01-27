import { useState } from "react";
import { MyResume } from "../../libs/types/forms";
import { handleMyResumeFormChanges } from "../../utilities/handleFormChanges";
import { placeholders } from "../../libs/data/text";

interface NameInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function NameInput({
  label,
  resumeForm,
  setResumeForm,
}: NameInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFormInputs = (dkey: string, value: string) => {
    const data = { name: { ...resumeForm.name, [dkey]: value } };

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
        placeholder={placeholders.fName}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("fName", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      {
        ///TODO new feature to get the middle name and display only the first letters ex. san jose -> sj
      }
      <input
        type="text"
        placeholder={placeholders.mName}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("mName", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        placeholder={placeholders.lName}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("lName", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
