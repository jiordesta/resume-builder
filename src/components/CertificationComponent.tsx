import { placeholders } from "../libs/data/text";
import { MyCertificate, MyResume } from "../libs/types/forms";
import { handleMyResumeFormChanges } from "../utilities/handleFormChanges";

interface CertificateComponentProps {
  resumeForm: MyResume;
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>;
  certificate: MyCertificate;
}

export default function CertificationComponent({
  resumeForm,
  setResumeForm,
  certificate,
}: CertificateComponentProps) {
  const handleRemoveButton = () => {
    let certificates = resumeForm.certificates;

    certificates = certificates.filter(
      (cert: MyCertificate) => cert.id !== certificate.id
    );

    const data = { certificates: certificates };
    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  const handleFormInputs = (dkey: string, value: string) => {
    let certificates = resumeForm.certificates;

    const index = resumeForm.certificates.findIndex(
      (cert: MyCertificate) => cert.id === certificate.id
    );

    certificates[index] = { ...certificate, [dkey]: value };

    const data = { certificates: certificates };

    handleMyResumeFormChanges(resumeForm, setResumeForm, data);
  };

  return (
    <div className="flex gap-4 w-full bg-lightGray rounded-md p-2 transition-all ease-in-out duration-300 bg-opacity-10">
      <div className="w-full">
        <input
          type="text"
          placeholder={placeholders.certificateTitle}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) => handleFormInputs("title", e.target.value)}
        />
        <input
          type="text"
          placeholder={placeholders.organization}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) =>
            handleFormInputs("organization", e.target.value)
          }
        />
        <input
          type="text"
          placeholder={placeholders.completed}
          className="border-none outline-none bg-transparent focus:ring-0 w-full"
          onChange={(e: any) =>
            handleFormInputs("dateCompleted", e.target.value)
          }
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
