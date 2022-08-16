import { Dispatch, ReactNode, SetStateAction } from "react";
import { JsxElement } from "typescript";

export interface ISidebarProps {}

export interface ISidebarHeaderStyled {
}

export interface ISidebarItem {
  key: string;
  text: string;
  children?: ISidebarItem[];
  icon?: ReactNode;
  path?: string;
}
