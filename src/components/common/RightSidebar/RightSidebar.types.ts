import React, { ReactNode } from "react";

export interface IRightSidebar {
  children: ReactNode | HTMLElement;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  onSave?: () => void;
  onClose?: () => void;
  form: string;
}

export interface ISidebarStyle {
  open?: boolean;
}
