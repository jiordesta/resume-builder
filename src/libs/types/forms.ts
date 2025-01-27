export type MyResume = {
  id: string;
  name: MyName;
  profession: string;
  summary: string;
  phone: MyPhone;
  email: string;
  address: MyAddress;
  experiences: MyExperience[];
  skills: MySkillSet[];
  educations: MyEducation[];
  projects: MyProject[];
  certificates: MyCertificate[];
};

export type MyAddress = {
  city: string;
  province: string;
  country: string;
};

export type MyName = {
  fName: string;
  mName: string;
  lName: string;
};

export type MyPhone = string;

export type MyExperience = {
  id: string;
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  location: string;
  contributions: MyContribution[];
};

export type MyContribution = {
  id: string;
  details: string;
};

export type MySkill = {
  id: string;
  title: string;
};

export type MySkillSet = {
  id: string;
  category: string;
  skills: MySkill[];
};

export type MyProject = {
  id: string;
  title: string;
  description: string;
  contributions: MyContribution[];
  tools: string;
  links: string;
};

export type MyCertificate = {
  id: string;
  title: string;
  organization: string;
  dateCompleted: string;
  link?: string;
  relevance?: string;
};

export type MyEducation = {
  id: string;
  startDate: string;
  endDate: string;
  schoolName: string;
  course: string;
  location: string;
};
