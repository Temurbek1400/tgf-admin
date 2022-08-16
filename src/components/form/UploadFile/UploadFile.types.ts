import { IErrors, IFormNames } from "../../../interfaces/form";

export interface UploadFilePropsType {
  FORM_NAMES: IFormNames;
  name: string;
  dataUrl: string;
  control: any;
  setValue: any;
  id: string;
  className?: string;
  upload?: (data: string) => void;
  defaultImageUrl?: string | undefined | null;
  errors?: IErrors;
  rules?: any;
  clearErrors?: any;
  setError?: any;
}

export interface IUploadFileStyled {
  isError: boolean;
}
