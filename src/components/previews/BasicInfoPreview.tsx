import { MyAddress, MyName } from "../../libs/types/forms";

interface BasicInfoPreviewProps {
  name: MyName;
  profession: string;
  summary: string;
  phone: string;
  email: string;
  address: MyAddress;
}

export default function BasicInfoPreview({
  name,
  profession,
  summary,
  phone,
  email,
  address,
}: BasicInfoPreviewProps) {
  return (
    <>
      <h1 className="uppercase font-bold text-3xl">{`${name.fName ?? ""} ${
        name.mName ?? ""
      } ${name.lName ?? ""}`}</h1>
      <h1 className="capitalize">{`${profession ?? ""}`}</h1>
      <h1>{`${phone ?? ""}`}</h1>
      <h1 className="underline">{`${email ?? ""}`}</h1>
      <h1 className="flex gap-1 capitalize">
        <p
          className={`${address.city ? "" : "hidden"}`}
        >{`${address.city},`}</p>
        <p
          className={`${address.province ? "" : "hidden"}`}
        >{`${address.province},`}</p>
        <p
          className={`${address.country ? "" : "hidden"}`}
        >{`${address.country}`}</p>
      </h1>
      {summary && (
        <>
          <h1 className="text-2xl uppercase mt-4">professional summary</h1>
          <hr className="mt-2" />
        </>
      )}
      <p>{`${summary ?? ""}`}</p>
    </>
  );
}
