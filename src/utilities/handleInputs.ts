import { MyContribution, MyExperience, MyForm } from "../libs/types/forms";

export const handleInput = (
  form?: MyForm,
  data?: string | object | number,
  key?: string
) => {
  if (!key) return form;

  return { ...form, [key]: data };
};

export const handleExperienceForm = (form?: MyForm, data?: MyExperience) => {
  if (!form || !data) return form;

  if (!form.experiences) {
    return { ...form, ["experiences"]: [data] };
  } else {
    const updatedExperiences = form.experiences.map(
      (experience: MyExperience) =>
        experience.id === data.id ? data : experience
    );
    form.experiences = updatedExperiences;
    return form;
  }
};

export const handleContributionInputs = (
  form: MyExperience,
  data: MyContribution
) => {
  if (!form || !data) return form;

  if (!form.contributions) {
    return { ...form, ["contributions"]: [data] };
  } else {
    const updatedContributions = form.contributions.map(
      (contribution: MyContribution) =>
        contribution.id === data.id ? data : contribution
    );
    form.contributions = updatedContributions;
    return form;
  }
};
