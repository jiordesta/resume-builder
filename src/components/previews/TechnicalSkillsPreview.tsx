import { MySkill, MySkillSet } from "../../libs/types/forms";

interface TechnicalSkillsPreviewProps {
  skills: MySkillSet[];
}

export default function TechnicalSkillsPreview({
  skills,
}: TechnicalSkillsPreviewProps) {
  return (
    <>
      <h1 className="text-2xl uppercase mt-4">skills</h1>
      <hr className="mt-2" />
      <ul className="capitalize">
        {skills.map((skill: MySkillSet) => (
          <li key={skill.id}>
            <h1>{`${skill.category}: ${skill.skills
              .filter((sk: MySkill) => sk.title !== "")
              .map((sk: MySkill) => sk.title)
              .join(", ")}`}</h1>
          </li>
        ))}
      </ul>
    </>
  );
}
