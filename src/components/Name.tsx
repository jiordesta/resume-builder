import { useEffect, useState } from "react";
import { handleInput } from "../utilities/handleInputs";
import { MyForm, Name } from "../libs/types/forms";

interface NameInputProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
}

export default function NameInput({
  label,
  form,
  setForm,
  dkey,
}: NameInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [name, setName] = useState<Name>();

  useEffect(() => {
    //@ts-ignore
    setForm(handleInput(form, name, dkey));
  }, [name]);

  const handleFirstName = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setName(handleInput(name, e.target.value, "fname"));
  };

  const handleMiddleInitial = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setName(handleInput(name, e.target.value, "mname"));
  };

  const handleLastName = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setName(handleInput(name, e.target.value, "lname"));
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
        onChange={handleFirstName}
        placeholder="First Name"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        onChange={handleMiddleInitial}
        placeholder="Middle Initial"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        onChange={handleLastName}
        placeholder="Last Name"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
