import { MyExperience } from "../libs/types/forms";

interface ExperienceInputProps {
  experienceForm: MyExperience;
}

export default function ExperienceInput({
  experienceForm,
}: ExperienceInputProps) {
  return (
    <div className="flex gap-4 w-full">
      <div className="p-1 bg-lightGray h-[4px] mt-2"></div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Start Date"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleExperienceInput(e, "startDate")}
        />
        <input
          type="text"
          placeholder="End Date"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleExperienceInput(e, "endDate")}
        />
        <input
          type="text"
          placeholder="Your Role"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleExperienceInput(e, "role")}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleExperienceInput(e, "company")}
        />
        <input
          type="text"
          placeholder="Location"
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleExperienceInput(e, "location")}
        />
        {experience.contributions.map((contribution) => (
          <ContributionInput
            key={generateRandomId()}
            contribution={contribution}
          />
        ))}
      </div>
    </div>
  );
}
const WorkExperienceInput = ({
  experienceForm,
}: {
  experienceForm: MyExperience;
}) => {
  const [experience, setExperience] = useState<MyExperience>(experienceForm);

  useEffect(() => {
    setForm(handleExperienceForm(form, experience));
    handleAddNewContributionForm();
  }, [experience]);

  const ContributionInput = ({
    contribution,
  }: {
    contribution: MyContribution;
  }) => {
    const handleContributionChange = (e: any) => {
      contribution.details = e.target.value;
      setExperience(handleContributionInputs(experience, contribution));
      setForm(handleExperienceForm(form, experience));
      handleAddNewContributionForm();
    };

    return (
      <div className="flex gap-2">
        <div className="p-1 bg-lightGray h-[2px] mt-2 rounded-full"></div>
        <textarea
          placeholder="Contribution"
          rows={2}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={handleContributionChange}
        />
      </div>
    );
  };

  const handleExperienceInput = (e: any, dkey: string) => {
    setExperience({ ...experience, [dkey]: e.target.value });
  };

  const handleAddNewContributionForm = () => {
    const newContributionForm: MyContribution = {
      id: generateRandomId(),
      details: "",
    };

    const contributions = [...experience.contributions, newContributionForm];

    if (experience.contributions.length === 0) {
      setExperience({ ...experience, ["contributions"]: contributions });
    } else {
      const hasVacantContributionInput = experience.contributions.some(
        (contribution: MyContribution) => contribution.details === ""
      );
      if (!hasVacantContributionInput) {
        setExperience({ ...experience, ["contributions"]: contributions });
      }
    }
  };
};
