import { useEffect, useState } from "react";
import { handleInput } from "../utilities/handleInputs";
import { MyAddress, MyForm } from "../libs/types/forms";

interface PhysicalAddressProps {
  label: string;
  form?: MyForm;
  setForm: React.Dispatch<React.SetStateAction<MyForm | undefined>>;
  dkey: string;
}

export default function PhysicalAddress({
  label,
  form,
  setForm,
  dkey,
}: PhysicalAddressProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [address, setAddress] = useState<MyAddress>();

  useEffect(() => {
    //@ts-ignore
    setForm(handleInput(form, address, dkey));
  }, [address]);

  const handleCity = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setAddress(handleInput(address, e.target.value, "city"));
  };

  const handleProvince = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setAddress(handleInput(address, e.target.value, "province"));
  };

  const handleCountry = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setAddress(handleInput(address, e.target.value, "country"));
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
        onChange={handleCity}
        placeholder="City"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        onChange={handleProvince}
        placeholder="Province"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
      <input
        type="text"
        onChange={handleCountry}
        placeholder="Country"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
