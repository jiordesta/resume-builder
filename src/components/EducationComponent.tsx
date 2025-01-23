import { MyEducation, MyResume } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";

interface EducationComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  education: MyEducation;
}

export default function EducationComponent({
  resumeForm,
  setResumeForm,
  education,
}: EducationComponentProps) {
  const handleRemoveButton = () => {
    let educations = resumeForm.educations;

    educations = educations.filter((ed: MyEducation) => ed.id !== education.id);

    const data = { educations: educations };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleFormInputs = (dkey: string, value: string) => {
    let educations = resumeForm.educations;

    const index = educations.findIndex(
      (ed: MyEducation) => ed.id === education.id
    );

    educations[index] = { ...education, [dkey]: value };

    const data = { educations: educations };

    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex gap-4 w-full bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
      <div className="w-full">
        <input
          type="text"
          placeholder="Date Enrolled"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("startDate", e.target.value)}
        />
        <input
          type="text"
          placeholder="Date Graduated"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("endDate", e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("course", e.target.value)}
        />
        <input
          type="text"
          placeholder="School Name"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("schoolName", e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("location", e.target.value)}
        />
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
