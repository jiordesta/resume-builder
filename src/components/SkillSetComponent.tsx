import { useEffect } from "react";
import { MyResume, MySkill, MySkillSet } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";
import SkillComponent from "./SkillComponent";
import { generateEmptySkillForm } from "../utilities/generateEmptyForms";
import { placeholders } from "../libs/data/text";

interface SkillSetComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  skillSet: MySkillSet;
}

export default function SkillSetComponent({
  resumeForm,
  setResumeForm,
  skillSet,
}: SkillSetComponentProps) {
  useEffect(() => {
    handleAddNewSkillForm();
  }, [skillSet]);

  const handleAddNewSkillForm = () => {
    let skills = skillSet.skills;

    const emptySkillInput = skills.filter(
      (skill: MySkill) => skill.title === ""
    );

    if (emptySkillInput.length === 1) {
      return;
    } else if (emptySkillInput.length > 1) {
      skills = skills.filter((skill: MySkill) => skill.title !== "");
    }

    skills.push(generateEmptySkillForm());

    let skillSets = resumeForm.skills;

    const skillSetIndex = skillSets.findIndex(
      (ss: MySkillSet) => ss.id === skillSet.id
    );

    skillSets[skillSetIndex] = { ...skillSet, ["skills"]: skills };

    const data = { skills: skillSets };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleRemoveButton = () => {
    let skills = resumeForm.skills;

    skills = skills.filter((skill: MySkillSet) => skill.id !== skillSet.id);

    const data = { skills: skills };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleCategoryInputChange = (e: any) => {
    let skillSets = resumeForm.skills;

    const skillSetIndex = skillSets.findIndex(
      (ss: MySkillSet) => ss.id === skillSet.id
    );

    skillSets[skillSetIndex] = { ...skillSet, ["category"]: e.target.value };

    const data = { skills: skillSets };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex justify-between gap-2 bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10 w-full">
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col">
          <h1 className="uppercase glowText">Skillset Category</h1>
          <input
            type="text"
            placeholder={placeholders.category}
            onChange={handleCategoryInputChange}
            className="border-none outline-none bg-transparent focus:ring-0 w-full"
          />
        </div>
        <div className="w-full">
          <h1 className="uppercase glowText">Skills</h1>
          <div className="space-y-2">
            {skillSet.skills.map((skill: MySkill, index: any) => (
              <SkillComponent
                key={skill.id}
                skill={skill}
                resumeForm={resumeForm}
                setResumeForm={setResumeForm}
                skillSet={skillSet}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <button
          className=" border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg px-2"
          onClick={handleRemoveButton}
        >
          X
        </button>
      </div>
    </div>
  );
}

{
  /* <button className="bg-teal bg-opacity-20 glowText uppercase px-2 rounded-lg border border-dashed border-teal">
+
</button> */
}
