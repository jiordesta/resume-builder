import {
  MyAddress,
  MyCertificate,
  MyContribution,
  MyEducation,
  MyExperience,
  MyName,
  MyPhone,
  MyProject,
  MyResume,
  MySkill,
  MySkillSet,
} from "../libs/types/forms";
import { generateRandomId } from "./generateRandomId";

export const generateEmptyResumeForm = () => {
  const newNameForm: MyName = {
    fName: "",
    mName: "",
    lName: "",
  };

  const newPhoneForm: MyPhone = "";

  const newAddressForm: MyAddress = {
    city: "",
    province: "",
    country: "",
  };

  const newResumeForm: MyResume = {
    id: generateRandomId(),
    name: newNameForm,
    profession: "",
    summary: "",
    phone: newPhoneForm,
    email: "",
    address: newAddressForm,
    experiences: [generateEmptyMyExperienceForm()],
    skills: [generateEmptyMySkillSetForm()],
    educations: [generateEmptyMyEducationForm()],
    projects: [generateEmptyMyProjectForm()],
    certificates: [generateEmptyCertificateForm()],
  };

  return newResumeForm;
};

export const generateEmptyMyExperienceForm = () => {
  const newMyExperienceForm: MyExperience = {
    id: generateRandomId(),
    startDate: "",
    endDate: "",
    company: "",
    position: "",
    location: "",
    contributions: [],
  };

  return newMyExperienceForm;
};

export const generateEmptyMyContributionForm = () => {
  const newMyContributionForm: MyContribution = {
    id: generateRandomId(),
    details: "",
  };

  return newMyContributionForm;
};

export const generateEmptyMySkillSetForm = () => {
  const newMySkillForm: MySkillSet = {
    id: generateRandomId(),
    category: "",
    skills: [generateEmptySkillForm()],
  };

  return newMySkillForm;
};

export const generateEmptySkillForm = () => {
  const newSkillForm: MySkill = {
    id: generateRandomId(),
    title: "",
  };

  return newSkillForm;
};

export const generateEmptyMyProjectForm = () => {
  const newMyProjectForm: MyProject = {
    id: generateRandomId(),
    title: "",
    description: "",
    contributions: [generateEmptyMyContributionForm()],
    tools: "",
    links: "",
  };

  return newMyProjectForm;
};

export const generateEmptyCertificateForm = () => {
  const newMyCertificateForm: MyCertificate = {
    id: generateRandomId(),
    title: "",
    organization: "",
    dateCompleted: "",
  };

  return newMyCertificateForm;
};

export const generateEmptyMyEducationForm = () => {
  const newMyEducationForm: MyEducation = {
    id: generateRandomId(),
    startDate: "",
    endDate: "",
    schoolName: "",
    location: "",
    course: "",
  };

  return newMyEducationForm;
};
