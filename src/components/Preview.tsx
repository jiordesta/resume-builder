import { MyResume } from "../libs/types/forms";
import ExportResumeBtn from "./buttons/ExportResumeBtn";
import GoTopBtn from "./buttons/GoTopBtn";
import BasicInfoPreview from "./previews/BasicInfoPreview";
import EducationPreview from "./previews/EducationPreview";
import ExperiencesPreview from "./previews/ExperiencesPreview";
import TechnicalSkillsPreview from "./previews/TechnicalSkillsPreview";

interface PreviewProps {
  resumeForm: MyResume;
}

export default function Preview({ resumeForm }: PreviewProps) {
  const {
    name,
    profession,
    summary,
    phone,
    email,
    address,
    experiences,
    skills,
    educations,
    projects,
    certificates,
  } = resumeForm;

  return (
    <div className="w-full bg-lightGray rounded-md p-6 bg-opacity-10 flex flex-col gap-4 relative">
      <div className="sticky top-0 flex justify-start">
        <ExportResumeBtn />
      </div>
      <div>
        <BasicInfoPreview
          name={name}
          profession={profession}
          summary={summary}
          phone={phone}
          email={email}
          address={address}
        />
        <ExperiencesPreview experiences={experiences} />
        <TechnicalSkillsPreview skills={skills} />
        <EducationPreview educations={educations} />
      </div>
      <div className="sticky top-0 flex justify-end">
        <GoTopBtn />
      </div>
    </div>
  );
}
