import { useEffect } from "react";
import { MyExperience, MyResume } from "../../libs/types/forms";
import {
  generateEmptyMyContributionForm,
  generateEmptyMyExperienceForm,
} from "../../utilities/generateEmptyForms";
import WorkExperienceComponent from "../WorkExperienceComponent";

interface ExperienceInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function ExperienceInput({
  label,
  resumeForm,
  setResumeForm,
}: ExperienceInputProps) {
  const handleAddNewExperienceForm = () => {
    const newExperienceForm = generateEmptyMyExperienceForm();
    const newContributionForm = generateEmptyMyContributionForm();
    newExperienceForm.contributions.push(newContributionForm);
    const experienceNewList = [...resumeForm.experiences, newExperienceForm];
    setResumeForm({ ...resumeForm, ["experiences"]: experienceNewList });
  };

  //   useEffect(() => {
  //     console.log(resumeForm);
  //   }, [resumeForm]);

  return (
    <>
      <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
        <h1 className="glowText uppercase">{label}</h1>
      </div>
      {resumeForm.experiences.map((experience: MyExperience) => (
        <WorkExperienceComponent
          key={experience.id}
          resumeForm={resumeForm}
          setResumeForm={setResumeForm}
          experience={experience}
        />
      ))}
      <button
        className="text-[14px] w-full p-1 border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg"
        onClick={handleAddNewExperienceForm}
      >
        new experience form
      </button>
    </>
  );
}
