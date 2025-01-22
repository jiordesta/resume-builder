import { useEffect, useState } from "react";
import { handleInput } from "../utilities/handleInputs";
import { MyAddress, MyForm, Name } from "../libs/types/forms";

interface ContactNumberInputProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
}

export default function ContactNumberInput({
  label,
  form,
  setForm,
  dkey,
}: ContactNumberInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [mobile, setMobile] = useState<string>("");
  const [code, setCode] = useState("+639");

  useEffect(() => {
    //@ts-ignore
    setForm(handleInput(form, `${code}` + mobile, dkey));
  }, [mobile]);

  const handleCode = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setCode(e.target.value);
  };

  const handleNumber = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setMobile(e.target.value);
  };

  return (
    <div
      className={`${
        isFocus ? "bg-opacity-5" : "bg-opacity-10"
      } bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300`}
    >
      <h1 className="glowText uppercase">{label}</h1>
      <div className="flex gap-4">
        <select
          name="code"
          id="code"
          className="border-none outline-none bg-transparent focus:ring-0"
          onChange={handleCode}
        >
          <option value="+639" className="bg-mediumGray text-lightGray">
            PH
          </option>
          <option value="+123" className="bg-mediumGray text-lightGray">
            US
          </option>
          <option value="+321" className="bg-mediumGray text-lightGray">
            UK
          </option>
          <option value="+444" className="bg-mediumGray text-lightGray">
            JP
          </option>
        </select>
        <div className="flex gap-2 w-full">
          <h1>{code}</h1>
          <input
            type="text"
            onChange={handleNumber}
            placeholder="Phone Number"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            className="border-none outline-none bg-transparent focus:ring-0 w-full"
          />
        </div>
      </div>
    </div>
  );
}
