import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { DeviceType } from "../libs/enums/devices.enum";
import {
  MyContribution,
  MyEducation,
  MyExperience,
  MyResume,
  MySkill,
  MySkillSet,
} from "../libs/types/forms";
import { getDeviceType } from "../utilities/getDeviceType";
import NameInput from "../components/inputs/NameInput";
import { generateEmptyResumeForm } from "../utilities/generateEmptyForms";
import TextInput from "../components/inputs/TextInput";
import AddressInput from "../components/inputs/AddressInput";
import TextAreaInput from "../components/inputs/TextAreaInput";
import ExperienceInput from "../components/inputs/ExperienceInput";
import SkillsInput from "../components/inputs/SkillsInput";
import EducationInput from "../components/inputs/EducationInput";
import ProjectInput from "../components/inputs/ProjectInput";
import CertificationInput from "../components/inputs/CertificationInput";
import { placeholders } from "../libs/data/text";
import Preview from "../components/Preview";

export default function Service() {
  const [resumeForm, setResumeForm] = useState<MyResume>(
    generateEmptyResumeForm()
  );

  const deviceType: DeviceType = getDeviceType();

  useEffect(() => {
    //console.log(resumeForm);
  }, [resumeForm]);

  return (
    <PageLayout id="create">
      <div className="flex gap-2 pb-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="border border-dashed border-lightGray p-2 rounded-xl space-y-2">
            <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
              <h1 className="glowText uppercase text-2xl font-bold">
                basic Information
              </h1>
            </div>
            <NameInput
              resumeForm={resumeForm}
              label="full name"
              setResumeForm={setResumeForm}
            />
            <TextInput
              resumeForm={resumeForm}
              label="profession"
              setResumeForm={setResumeForm}
              dkey="profession"
              placeholder={placeholders.profession}
            />
            <TextInput
              resumeForm={resumeForm}
              label="phone number"
              setResumeForm={setResumeForm}
              dkey="phone"
              placeholder={placeholders.phone}
            />
            <TextInput
              resumeForm={resumeForm}
              label="email address"
              setResumeForm={setResumeForm}
              dkey="email"
              placeholder={placeholders.email}
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
              placeholder={placeholders.summary}
            />
          </div>
          <ExperienceInput
            resumeForm={resumeForm}
            label="Work Experiences"
            setResumeForm={setResumeForm}
          />
          <SkillsInput
            resumeForm={resumeForm}
            label="Skills"
            setResumeForm={setResumeForm}
          />
          <EducationInput
            resumeForm={resumeForm}
            label="Education"
            setResumeForm={setResumeForm}
          />
          <ProjectInput
            resumeForm={resumeForm}
            label="Projects"
            setResumeForm={setResumeForm}
          />
          <CertificationInput
            resumeForm={resumeForm}
            label="Certifications"
            setResumeForm={setResumeForm}
          />
        </div>
        <Preview resumeForm={resumeForm} />
      </div>
    </PageLayout>
  );
}
