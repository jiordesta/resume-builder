import { MyResume } from "../libs/types/forms";

export const handleMyResumeFormChanges = (
  resumeForm: MyResume,
  setResumeForm: React.Dispatch<React.SetStateAction<MyResume>>,
  data: object
) => {
  setResumeForm({ ...resumeForm, ...data });
};
