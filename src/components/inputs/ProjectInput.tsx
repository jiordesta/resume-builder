import { MyProject, MyResume } from "../../libs/types/forms";
import { generateEmptyMyProjectForm } from "../../utilities/generateEmptyForms";
import ProjectComponent from "../ProjectComponent";

interface ProjectInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function ProjectInput({
  label,
  resumeForm,
  setResumeForm,
}: ProjectInputProps) {
  const handleAddNewProjectForm = () => {
    const newProjectForm = generateEmptyMyProjectForm();
    const projectNewList = [...resumeForm.projects, newProjectForm];
    setResumeForm({ ...resumeForm, ["projects"]: projectNewList });
  };

  return (
    <div className="border border-dashed border-lightGray p-2 rounded-xl space-y-2">
      <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
        <h1 className="glowText uppercase text-2xl font-bold">{label}</h1>
      </div>
      {resumeForm?.projects &&
        resumeForm.projects.map((project: MyProject) => (
          <ProjectComponent
            key={project.id}
            resumeForm={resumeForm}
            setResumeForm={setResumeForm}
            project={project}
          />
        ))}
      <button
        className="text-[14px] w-full p-1 border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg"
        onClick={handleAddNewProjectForm}
      >
        new project form
      </button>
    </div>
  );
}
