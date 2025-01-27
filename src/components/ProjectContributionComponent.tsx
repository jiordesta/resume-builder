import {
  MyContribution,
  MyExperience,
  MyProject,
  MyResume,
} from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";

interface ProjectContributionComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  project: MyProject;
  contribution: MyContribution;
  index: any;
}

export default function ProjectContributionComponent({
  resumeForm,
  setResumeForm,
  project,
  contribution,
  index,
}: ProjectContributionComponentProps) {
  const handleInputChange = (e: any) => {
    let contributions = project.contributions;

    const contIndex = contributions.findIndex(
      (cont: MyContribution) => cont.id === contribution.id
    );

    contributions[contIndex] = { ...contribution, ["details"]: e.target.value };

    let projects = resumeForm.projects;

    const projIndex = resumeForm.projects.findIndex(
      (exp: MyProject) => exp.id === project.id
    );

    projects[projIndex] = { ...project, ["contributions"]: contributions };

    const data = { projects: projects };
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
