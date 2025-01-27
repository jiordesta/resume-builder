import { MyCertificate, MyResume } from "../../libs/types/forms";
import { generateEmptyCertificateForm } from "../../utilities/generateEmptyForms";
import CertificationComponent from "../CertificationComponent";

interface CertificationInputProps {
  label: string;
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
}

export default function CertificationInput({
  label,
  resumeForm,
  setResumeForm,
}: CertificationInputProps) {
  const handleAddNewCertificateForm = () => {
    const newCertificateForm = generateEmptyCertificateForm();
    const certificateNewList = [...resumeForm.certificates, newCertificateForm];
    setResumeForm({ ...resumeForm, ["certificates"]: certificateNewList });
  };

  return (
    <div className="border border-dashed border-lightGray p-2 rounded-xl space-y-2">
      <div className="bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
        <h1 className="glowText uppercase text-2xl font-bold">{label}</h1>
      </div>
      {resumeForm?.certificates &&
        resumeForm.certificates.map((certificate: MyCertificate) => (
          <CertificationComponent
            key={certificate.id}
            resumeForm={resumeForm}
            setResumeForm={setResumeForm}
            certificate={certificate}
          />
        ))}
      <button
        className="text-[14px] w-full p-1 border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg"
        onClick={handleAddNewCertificateForm}
      >
        new certification form
      </button>
    </div>
  );
}
