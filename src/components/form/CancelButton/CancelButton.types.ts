// import { TApiResponseStatus } from "hooks/useRequest/useRequest.types";
import { ReactNode } from "react";
import { TApiRequestStatus } from "hooks/useRequest/useRequest.types";

export interface IButton {
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  element?: ReactNode | null;
  variant?: "text" | "outlined" | "contained" | undefined;
  status?: TApiRequestStatus;
  onClick?: () => void;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
}

export interface IKindButton{
  kind? :  "cancel" | "save" | undefined; 
}
