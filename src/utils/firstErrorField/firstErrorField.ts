import { IErrors, IFormNames } from "../../interfaces/form";

export const firstErrorField = (FORM_NAMES: IFormNames, errors: IErrors) => {
  return Object.keys(FORM_NAMES).find((formName: string) =>
    Object.keys(errors).find((errorName: string) => errorName === formName)
  );
};
