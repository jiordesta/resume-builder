import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import { getDeviceType } from "../utilities/getDeviceType";
import { DeviceType } from "../libs/enums/devices.enum";
import { MyForm } from "../libs/types/forms";
import PhysicalAddress from "../components/PhysicalAddress";

export default function Service() {
  const [form, setForm] = useState<MyForm | undefined>();

  const deviceType: DeviceType = getDeviceType();

  useEffect(() => {
    //console.log(form);
  }, [form]);

  return (
    <PageLayout id="create">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-full">
          <TextInput form={form} setForm={setForm} label="name" dkey="name" />
          <TextInput
            form={form}
            setForm={setForm}
            label="profession"
            dkey="position"
          />
          <TextInput
            form={form}
            setForm={setForm}
            label="contact number"
            dkey="mobile"
          />
          <TextInput
            form={form}
            setForm={setForm}
            dkey="email"
            label="email address"
          />
          <PhysicalAddress
            form={form}
            setForm={setForm}
            dkey="address"
            label="physical address"
          />
          <TextArea
            form={form}
            setForm={setForm}
            dkey="summary"
            label="professional summary"
            rows={
              deviceType === DeviceType.MOBILE
                ? 10
                : deviceType === DeviceType.TABLET
                ? 7
                : deviceType === DeviceType.PC
                ? 5
                : 5
            }
          />
        </div>
        {form ? (
          <div className="w-full bg-lightGray rounded-md p-2 bg-opacity-10">
            <h1 className="text-3xl font-bold uppercase">{form?.name}</h1>
            <h1 className="capitalize">{form?.position}</h1>
            <h1>{form?.mobile}</h1>
            <h1 className="underline">{form?.email}</h1>
            {form?.address && (
              <h1 className="capitalize">{`${form?.address?.city ?? "city"}, ${
                form?.address?.province ?? "province"
              }, ${form?.address?.country ?? "country"}`}</h1>
            )}
            <br />
            <h1
              className={`text-2xl font-bold transition-all duration-300 ease-in-out ${
                form.summary ? "opacity-100" : "opacity-0"
              }`}
            >
              PROFESSIONAL SUMMARY
            </h1>
            <hr
              className={`transition-all duration-300 ease-in-out ${
                form.summary ? "opacity-100" : "opacity-0"
              }`}
            />
            <p>{form?.summary}</p>
            <br />
            <h1
              className={`text-2xl font-bold transition-all duration-300 ease-in-out ${
                form.experiences ? "opacity-100" : "opacity-0"
              }`}
            >
              WORK EXPERIENCES
            </h1>
            <hr
              className={`transition-all duration-300 ease-in-out ${
                form.experiences ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ) : (
          <div className="w-full bg-lightGray rounded-md p-2 bg-opacity-10"></div>
        )}
      </div>
    </PageLayout>
  );
}
