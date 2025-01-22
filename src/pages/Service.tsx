import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { DeviceType } from "../libs/enums/devices.enum";
import { MyResume } from "../libs/types/forms";
import { getDeviceType } from "../utilities/getDeviceType";
import NameInput from "../components/inputs/NameInput";
import { generateEmptyResumeForm } from "../utilities/generateEmptyForms";
import PhoneInput from "../components/inputs/PhoneInput";
import TextInput from "../components/inputs/TextInput";
import AddressInput from "../components/inputs/AddressInput";
import TextAreaInput from "../components/inputs/TextAreaInput";

export default function Service() {
  const [resumeForm, setResumeForm] = useState<MyResume>(
    generateEmptyResumeForm()
  );

  const deviceType: DeviceType = getDeviceType();

  useEffect(() => {
    console.log(resumeForm);
  }, [resumeForm]);

  return (
    <PageLayout id="create">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-full">
          <NameInput
            resumeForm={resumeForm}
            label="full name"
            setResumeForm={setResumeForm}
          />
          <TextInput
            resumeForm={resumeForm}
            label="phone number"
            setResumeForm={setResumeForm}
            dkey="phone"
          />
          <TextInput
            resumeForm={resumeForm}
            label="email address"
            setResumeForm={setResumeForm}
            dkey="email"
          />
          <AddressInput
            resumeForm={resumeForm}
            label="home address"
            setResumeForm={setResumeForm}
          />
          <TextAreaInput
            resumeForm={resumeForm}
            setResumeForm={setResumeForm}
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
            placeholder="Short Introduction"
          />
        </div>
        <div className="w-full bg-lightGray rounded-md p-2 bg-opacity-10">
          Hello
        </div>
      </div>
    </PageLayout>
  );
}
