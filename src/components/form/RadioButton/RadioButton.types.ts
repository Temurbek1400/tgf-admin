import { IErrors, IFormNames } from "../../../interfaces/form";

export interface IRadioButtonProps {
  FORM_NAMES: IFormNames;
  name: string;
  control: any;
  valueKey: string;
  labelKey: string;
  id?: string;
  className?: string;
  options?: any[];
  rules?: any;
  errors?: IErrors;
  defaultValue?: string;
}
