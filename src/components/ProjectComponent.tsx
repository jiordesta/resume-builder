import { useEffect } from "react";
import { MyContribution, MyProject, MyResume } from "../libs/types/forms";
import ProjectContributionComponent from "./ProjectContributionComponent";
import { generateEmptyMyContributionForm } from "../utilities/generateEmptyForms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";
import { placeholders } from "../libs/data/text";

interface ProjectComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  project: MyProject;
}

export default function ProjectComponent({
  resumeForm,
  setResumeForm,
  project,
}: ProjectComponentProps) {
  useEffect(() => {
    handleAddNewContributionForm();
  }, [project]);

  const handleAddNewContributionForm = () => {
    let contributions = project.contributions;

    const emptyContributionInput = contributions.filter(
      (cont: MyContribution) => cont.details === ""
    );

    if (emptyContributionInput.length === 1) {
      return;
    } else if (emptyContributionInput.length > 1) {
      contributions = contributions.filter(
        (cont: MyContribution) => cont.details !== ""
      );
    }

    contributions.push(generateEmptyMyContributionForm());

    let projects = resumeForm.projects;

    const projIndex = resumeForm.projects.findIndex(
      (proj: MyProject) => proj.id === project.id
    );

    projects[projIndex] = { ...project, ["contributions"]: contributions };

    const data = { projects: projects };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleFormInputs = (dkey: string, value: string) => {
    let projects = resumeForm.projects;

    const index = resumeForm.projects.findIndex(
      (proj: MyProject) => proj.id === project.id
    );

    projects[index] = { ...project, [dkey]: value };

    const data = { projects: projects };

    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleRemoveButton = () => {
    let projects = resumeForm.projects;

    projects = projects.filter((proj: MyProject) => proj.id !== project.id);

    const data = { projects: projects };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex gap-4 w-full bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
      <div className="w-full">
        <input
          type="text"
          placeholder={placeholders.projectTitle}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("title", e.target.value)}
        />
        <textarea
          placeholder={placeholders.description}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("description", e.target.value)}
        />
        <input
          type="text"
          placeholder={placeholders.tools}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("tools", e.target.value)}
        />
        <input
          type="text"
          placeholder={placeholders.links}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("links", e.target.value)}
        />
        {project.contributions &&
          project.contributions.map((contr: MyContribution, index: any) => (
            <ProjectContributionComponent
              key={contr.id}
              resumeForm={resumeForm}
              setResumeForm={setResumeForm}
              project={project}
              index={index}
              contribution={contr}
            />
          ))}
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
