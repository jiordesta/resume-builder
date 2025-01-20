import { Months } from "../enums/months.enum";

export type MyExperience = {
  role: string;
  company: string;
  startDate: {
    month: Months;
    year: number;
  };
  endDate: {
    month: Months;
    year: number;
  };
  contributions: string[];
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

export type MyForm = {
  name: string;
  position: string;
  mobile: string;
  email: string;
  address: MyAddress;
  summary: string;
  experiences: MyExperience[];
  skills: MySkill[];
  education: MyEducation[];
};
