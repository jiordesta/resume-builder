import { MyForm } from "../libs/types/forms";

export const handleInput = (
  form?: MyForm,
  data?: string | object | number,
  key?: string
) => {
  if (!key) return form;

  return { ...form, [key]: data };
};
