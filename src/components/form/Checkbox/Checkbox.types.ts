import { IErrors, IFormNames } from "../../../interfaces/form";

export interface ICheckboxProps {
  name: string;
  control: any;
  FORM_NAMES: IFormNames;
  errors?: IErrors;
  rules?: any;
  label?: string;
  id?: string;
  defaultChecked?: boolean;
  labelAlign?: "top" | "bottom" | "start" | "end";
  className?: string;
}
