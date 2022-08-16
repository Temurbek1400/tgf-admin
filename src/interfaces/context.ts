import { ReactNode } from "react";

export interface IDefaultContext {
  state: any;
  actions: any;
}

export interface IProvider {
  children: ReactNode;
}

export type TCreateEditRequestMethod = "post" | "patch";
