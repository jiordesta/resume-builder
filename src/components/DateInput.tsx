import { useState } from "react";
import { Months } from "../libs/enums/months.enum";
import { MyExperience } from "../libs/types/forms";
import { getIndexFromArray } from "../utilities/getIndexFromArray";

interface DateInputProps {
  data: Months[];
  id: string;
  name: string;
  form: MyExperience;
  setForm: React.Dispatch<React.SetStateAction<MyExperience>>;
}

export default function DateInput({
  data,
  id,
  name,
  form,
  setForm,
}: DateInputProps) {
  const [month, setMonth] = useState("JAN");

  //      <h1 className="glowText w-[4%]">{name}</h1>

  return (
    <div className="flex">
      <select
        onChange={(e) => setMonth(e.target.value)}
        name={name}
        id={id}
        className="border-none outline-none bg-transparent focus:ring-0"
      >
        {data.map((value) => (
          <option
            key={`start${value}`}
            value={value}
            className="bg-mediumGray text-lightGray"
          >
            {value}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Year"
          className="border-none outline-none bg-transparent focus:ring-0"
        />
      </div>
    </div>
  );
}
