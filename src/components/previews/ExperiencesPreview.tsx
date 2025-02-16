import { MyContribution, MyExperience } from "../../libs/types/forms";

interface ExperiencesPreviewProps {
  experiences: MyExperience[];
}

export default function ExperiencesPreview({
  experiences,
}: ExperiencesPreviewProps) {
  return (
    <>
      {experiences.length > 0 && (
        <>
          <h1 className="text-2xl uppercase mt-4">work experiences</h1>
          <hr className="mt-2" />
        </>
      )}
      {experiences.map((experience: MyExperience) => (
        <div key={experience.id} className="mb-4">
          <div className="flex justify-between font-bold">
            <h1 className="capitalize">{experience.position}</h1>
            <h1 className="uppercase">{`${experience.startDate} - ${experience.endDate}`}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="capitalize">{experience.company}</h1>
            <h1 className="capitalize">{experience.location}</h1>
          </div>
          <ul>
            {experience.contributions
              .filter((cont: MyContribution) => cont.details !== "")
              .map((cont: MyContribution) => (
                <li key={cont.id} className="flex items-center gap-2">
                  <div className="p-1 bg-lightGray" />
                  <h1>{cont.details}</h1>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}
