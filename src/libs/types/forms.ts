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
  education: MyEducation[];
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

export type MyPhone = {
  code: string;
  number: string;
};

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

export type MyEducation = {
  id: string;
  startDate: string;
  endDate: string;
  schoolName: string;
  course: string;
  location: string;
};
