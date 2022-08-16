import { IErrors, IFormNames } from "../../../interfaces/form";

export interface ISelectProps {
  name: string;
  control: any;
  label?: string;
  errors?: IErrors;
  className?: string;
  handleInputChange?: any;
  dataKey?: string;
  rules?: any;
  defaultValue?: any;
  defaultInputValue?: string;
  multiple?: boolean;
  onChangeSelect?: any;
  placeholder?: string;
  options?: any;
  value?: any;
  FORM_NAMES: IFormNames;
  disabled?: boolean;
}
