import { placeholders } from "../libs/data/text";
import { MyResume, MySkill, MySkillSet } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";

interface SkillComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  skill: MySkill;
  skillSet: MySkillSet;
  index: any;
}

export default function SkillComponent({
  resumeForm,
  setResumeForm,
  skillSet,
  skill,
  index,
}: SkillComponentProps) {
  const handleInputChange = (e: any) => {
    let skills = skillSet.skills;

    const skillIndex = skills.findIndex((sk: MySkill) => sk.id === skill.id);

    skills[skillIndex] = { ...skill, ["title"]: e.target.value };

    let skillSets = resumeForm.skills;

    const skillSetIndex = skillSets.findIndex(
      (ss: MySkillSet) => ss.id === skillSet.id
    );

    skillSets[skillSetIndex] = { ...skillSet, ["skills"]: skills };

    const data = { skills: skillSets };

    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex gap-2">
      <h1>{`${parseInt(index) + 1}:`}</h1>
      <input
        type="text"
        placeholder={placeholders.skillName}
        onChange={handleInputChange}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
      />
    </div>
  );
}
