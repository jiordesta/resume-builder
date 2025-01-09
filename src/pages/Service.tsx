import { useState } from "react";
import PageLayout from "../components/PageLayout";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import { getDeviceType } from "../utilities/getDeviceType";
import { DeviceType } from "../libs/enums/devices.enum";

export default function Service() {
  const [name, setName] = useState("");
  const deviceType: DeviceType = getDeviceType();

  return (
    <PageLayout id="create">
      <div className="flex flex-col gap-4">
        <TextInput value={name} setValue={setName} label="name" />
        <TextArea
          value={name}
          setValue={setName}
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
    </PageLayout>
  );
}
