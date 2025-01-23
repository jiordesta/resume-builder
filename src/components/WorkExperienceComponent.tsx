import { useEffect } from "react";
import { MyContribution, MyExperience, MyResume } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";
import WorkContributionComponent from "./WorkContributionComponent";
import { generateEmptyMyContributionForm } from "../utilities/generateEmptyForms";

interface WorkExperienceComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  experience: MyExperience;
}

export default function WorkExperienceComponent({
  resumeForm,
  setResumeForm,
  experience,
}: WorkExperienceComponentProps) {
  useEffect(() => {
    handleAddNewContributionForm();
  }, [experience]);

  const handleAddNewContributionForm = () => {
    let contributions = experience.contributions;

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

    let experiences = resumeForm.experiences;

    const expIndex = resumeForm.experiences.findIndex(
      (exp: MyExperience) => exp.id === experience.id
    );

    experiences[expIndex] = { ...experience, ["contributions"]: contributions };

    const data = { experiences: experiences };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleFormInputs = (dkey: string, value: string) => {
    let experiences = resumeForm.experiences;

    const index = resumeForm.experiences.findIndex(
      (exp: MyExperience) => exp.id === experience.id
    );

    experiences[index] = { ...experience, [dkey]: value };

    const data = { experiences: experiences };

    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleRemoveButton = () => {
    let experiences = resumeForm.experiences;

    experiences = experiences.filter(
      (exp: MyExperience) => exp.id !== experience.id
    );

    const data = { experiences: experiences };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex gap-4 w-full bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
      <div className="w-full">
        <input
          type="text"
          placeholder="Date Hired"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("startDate", e.target.value)}
        />
        <input
          type="text"
          placeholder="Date Resigned"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("endDate", e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Position"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("position", e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e: any) => handleFormInputs("company", e.target.value)}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          onChange={(e: any) => handleFormInputs("location", e.target.value)}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
        />
        <h1 className="glowText uppercase mt-1">Contributions</h1>
        <ul className="space-y-1">
          {experience.contributions.map(
            (contribution: MyContribution, index) => (
              <WorkContributionComponent
                key={contribution.id}
                resumeForm={resumeForm}
                setResumeForm={setResumeForm}
                experience={experience}
                index={index}
                contribution={contribution}
              />
            )
          )}
        </ul>
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
// {"remove".split("").map((c: any, index) => (
//   <p className="uppercase" key={index}>
//     {c}
//   </p>
// ))}
