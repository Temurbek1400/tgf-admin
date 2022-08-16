import { IErrors, IFormNames } from "../../../interfaces/form";

export interface IPhoneInputProps {
  control: any;
  name: string;
  FORM_NAMES: IFormNames;
  defaultValue?: string;
  errors: IErrors;
  placeholder?: string;
  label?: string;
  className?: string;
  rules?: any;
}
