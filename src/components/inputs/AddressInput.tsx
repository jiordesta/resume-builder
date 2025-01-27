import { useState } from "react";
import { MyResume } from "../../libs/types/forms";
import { handleMyResumeFormChanges } from "../../utilities/handleFormChanges";
import { placeholders } from "../../libs/data/text";

interface AddressInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function AddressInput({
  label,
  resumeForm,
  setResumeForm,
}: AddressInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFormInputs = (dkey: string, value: string) => {
    const data = { address: { ...resumeForm.address, [dkey]: value } };

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
        placeholder={placeholders.city}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("city", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        placeholder={placeholders.province}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("province", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        placeholder={placeholders.country}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={(e) => handleFormInputs("country", e.target.value)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
