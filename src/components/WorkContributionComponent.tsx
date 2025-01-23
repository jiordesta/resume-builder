import { MyContribution, MyExperience, MyResume } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";

interface WorkContributionComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  experience: MyExperience;
  contribution: MyContribution;
  index: any;
}

export default function WorkContributionComponent({
  resumeForm,
  setResumeForm,
  experience,
  contribution,
  index,
}: WorkContributionComponentProps) {
  const handleInputChange = (e: any) => {
    let contributions = experience.contributions;

    const contIndex = contributions.findIndex(
      (cont: MyContribution) => cont.id === contribution.id
    );

    contributions[contIndex] = { ...contribution, ["details"]: e.target.value };

    let experiences = resumeForm.experiences;

    const expIndex = resumeForm.experiences.findIndex(
      (exp: MyExperience) => exp.id === experience.id
    );

    experiences[expIndex] = { ...experience, ["contributions"]: contributions };

    const data = { experiences: experiences };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <li className="flex gap-2">
      <h1>{`${parseInt(index) + 1}:`}</h1>
      <textarea
        rows={1}
        className="border-none outline-none bg-transparent focus:ring-0 w-full"
        onChange={handleInputChange}
      />
      {
        //add a placeholder where you add example randomly using some strong keywords
      }
    </li>
  );
}
