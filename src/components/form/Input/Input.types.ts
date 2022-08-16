import React from "react";
import { IErrors, IFormNames } from "../../../interfaces/form";

export interface IInputProps {
  name: string;
  control: any;
  FORM_NAMES: IFormNames;
  label?: string;
  id?: string;
  type?: TInput;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  rules?: any;
  errors?: IErrors;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TInput = "text" | "number" | "tel" | "password" | "range";

export interface IInputContentStyled {
  isError: boolean;
}
