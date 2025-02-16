import { MyEducation } from "../../libs/types/forms";

interface EducationPreviewProps {
  educations: MyEducation[];
}

export default function EducationPreview({
  educations,
}: EducationPreviewProps) {
  return (
    <>
      <h1 className="text-2xl uppercase mt-4">education</h1>
      <hr className="mt-2" />
      <ul>
        {educations.map((education: MyEducation) => (
          <li key={education.id} className="capitalize mb-4">
            <div className="flex justify-between font-bold">
              <h1>{education.schoolName}</h1>
              <h1 className="uppercase">{`${education.startDate} - ${education.endDate}`}</h1>
            </div>
            <div className="flex justify-between">
              <h1>{education.course}</h1>
              <h1>{education.location}</h1>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
