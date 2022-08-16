import { IErrors, IFormNames } from "../../../interfaces/form";

export interface TextAreaPropsType {
  name: string;
  control: any;
  FORM_NAMES: IFormNames;
  label?: string;
  className?: string;
  rules?: any;
  errors?: IErrors;
  defaultValue?: string;
}
export interface TextAreaStyledType {
  isError: boolean;
}
