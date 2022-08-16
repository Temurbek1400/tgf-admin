import { IErrors, IFormNames } from "../../../interfaces/form";

export interface IPriceFormatInputProps {
  name: string;
  setFocus: any;
  control: any;
  setValue: any;
  FORM_NAMES: IFormNames;
  label?: string;
  id?: string;
  defaultValue?: string;
  className?: string;
  rules?: any;
  errors?: IErrors;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
