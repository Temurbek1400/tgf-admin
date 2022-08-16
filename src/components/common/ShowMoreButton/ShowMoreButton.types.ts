import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IShowMoreButton {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export interface IShowMoreStyled {
  open: boolean;
}
