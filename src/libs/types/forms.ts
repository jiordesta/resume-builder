import { Months } from "../enums/months.enum";

export type MyContribution = {
  id?: string;
  details: string;
};

export type MyExperience = {
  id?: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  contributions: MyContribution[];
};

export type MySkill = {
  category: string;
  skills: string[];
};

export type MyEducation = {
  school: string;
  startDate?: {
    month: Months;
    year: number;
  };
  endDate?: {
    month: Months;
    year: number;
  };
  address: {
    city: string;
    province: string;
    country: string;
  };
  course: string;
};

export type MyAddress = {
  city: string;
  province: string;
  country: string;
};

export type Name = {
  fname: string;
  mname: string;
  lname: string;
};

export type MyForm = {
  name: Name;
  position: string;
  mobile: string;
  email: string;
  address: MyAddress;
  summary: string;
  experiences: MyExperience[];
  skills: MySkill[];
  education: MyEducation[];
};
