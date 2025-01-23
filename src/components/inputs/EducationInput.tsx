import { MyEducation, MyResume } from "../../libs/types/forms";
import { generateEmptyMyEducationForm } from "../../utilities/generateEmptyForms";
import EducationComponent from "../EducationComponent";

interface EducationInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function EducationInput({
  label,
  resumeForm,
  setResumeForm,
}: EducationInputProps) {
  const handleAddNewEducationForm = () => {
    const newEducationForm = generateEmptyMyEducationForm();

    const educationList = [...resumeForm.educations, newEducationForm];
    setResumeForm({ ...resumeForm, ["educations"]: educationList });
  };

  return (
    <>
      <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
        <h1 className="glowText uppercase">{label}</h1>
      </div>
      {resumeForm.educations.map((education: MyEducation) => (
        <EducationComponent
          key={education.id}
          resumeForm={resumeForm}
          setResumeForm={setResumeForm}
          education={education}
        />
      ))}
      <button
        className="text-[14px] w-full p-1 border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg"
        onClick={handleAddNewEducationForm}
      >
        new education form
      </button>
    </>
  );
}
