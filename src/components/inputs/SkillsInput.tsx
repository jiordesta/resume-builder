import { MyResume, MySkillSet } from "../../libs/types/forms";
import { generateEmptyMySkillSetForm } from "../../utilities/generateEmptyForms";
import SkillSetComponent from "../SkillSetComponent";

interface SkillsInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function SkillsInput({
  label,
  resumeForm,
  setResumeForm,
}: SkillsInputProps) {
  const handleAddNewSkillSetForm = () => {
    const newSkillSetForm = generateEmptyMySkillSetForm();

    setResumeForm({
      ...resumeForm,
      ["skills"]: [...resumeForm.skills, newSkillSetForm],
    });
  };

  return (
    <>
      <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
        <h1 className="glowText uppercase">{label}</h1>
      </div>
      {resumeForm.skills.map((skillSet: MySkillSet) => (
        <SkillSetComponent
          key={skillSet.id}
          resumeForm={resumeForm}
          setResumeForm={setResumeForm}
          skillSet={skillSet}
        />
      ))}
      <button
        className="text-[14px] w-full p-1 border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg"
        onClick={handleAddNewSkillSetForm}
      >
        new skillset form
      </button>
    </>
  );
}
