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

export default function Service() {
  const [resumeForm, setResumeForm] = useState<MyResume>(
    generateEmptyResumeForm()
  );

  const deviceType: DeviceType = getDeviceType();

  useEffect(() => {
    //console.log(resumeForm);
  }, [resumeForm]);

  const Preview = () => {
    return (
      <div className="w-full bg-lightGray rounded-md p-6 bg-opacity-10">
        <h1 className="uppercase font-bold text-3xl">{`${
          resumeForm.name.fName ?? ""
        } ${resumeForm.name.mName ?? ""} ${resumeForm.name.lName ?? ""}`}</h1>
        <h1 className="capitalize">{`${resumeForm.profession ?? ""}`}</h1>
        <h1>{`${resumeForm.phone ?? ""}`}</h1>
        <h1 className="underline">{`${resumeForm.email ?? ""}`}</h1>
        <h1 className="flex gap-1 capitalize">
          <p
            className={`${resumeForm.address.city ? "" : "hidden"}`}
          >{`${resumeForm.address.city},`}</p>
          <p
            className={`${resumeForm.address.province ? "" : "hidden"}`}
          >{`${resumeForm.address.province},`}</p>
          <p
            className={`${resumeForm.address.country ? "" : "hidden"}`}
          >{`${resumeForm.address.country},`}</p>
        </h1>
        {resumeForm.summary && (
          <>
            <h1 className="text-2xl uppercase mt-4">professional summary</h1>
            <hr className="mt-2" />
          </>
        )}
        <p>{`${resumeForm.summary ?? ""}`}</p>
        {resumeForm.experiences.length > 0 && (
          <>
            <h1 className="text-2xl uppercase mt-4">work experiences</h1>
            <hr className="mt-2" />
          </>
        )}
        {resumeForm.experiences.map((experience: MyExperience) => (
          <div key={experience.id} className="mb-4">
            <div className="flex justify-between font-bold">
              <h1 className="capitalize">{experience.position}</h1>
              <h1 className="uppercase">{`${experience.startDate} - ${experience.endDate}`}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="capitalize">{experience.company}</h1>
              <h1 className="capitalize">{experience.location}</h1>
            </div>
            <ul>
              {experience.contributions
                .filter((cont: MyContribution) => cont.details !== "")
                .map((cont: MyContribution) => (
                  <li key={cont.id} className="flex items-center gap-2">
                    <div className="p-1 bg-lightGray" />
                    <h1>{cont.details}</h1>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <h1 className="text-2xl uppercase mt-4">technical skills</h1>
        <hr className="mt-2" />
        <ul className="capitalize">
          {resumeForm.skills.map((skill: MySkillSet) => (
            <li key={skill.id}>
              <h1>{`${skill.category}: ${skill.skills
                .filter((sk: MySkill) => sk.title !== "")
                .map((sk: MySkill) => sk.title)
                .join(", ")}`}</h1>
            </li>
          ))}
        </ul>
        <h1 className="text-2xl uppercase mt-4">education</h1>
        <hr className="mt-2" />
        <ul>
          {resumeForm.educations.map((education: MyEducation) => (
            <li key={education.id} className="capitalize mb-4">
              <div className="flex justify-between font-bold">
                <h1>{education.schoolName}</h1>
                <h1 className="uppercase">{`${education.startDate} - ${education.endDate}`}</h1>
              </div>
              <div className="flex justify-between">
                <h1>{education.course}</h1>
                <h1>{education.location}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
        <Preview />
      </div>
    </PageLayout>
  );
}
