import { IErrors, IFormNames } from "../../../interfaces/form";

export interface IUploadImageProps {
  FORM_NAMES: IFormNames;
  name: string;
  id?: string;
  setValue?: any;
  setError?: any;
  clearErrors?: any;
  dataUrl?: any;
  upload?: (data: string) => void;
  errors?: IErrors;
  control?: any;
  rules?: any;
  defaultImageUrl?: string;
  label?: string;
  accept?: string;
  className?: string;
  setMap?: (setMapRequest: any) => void;
}
