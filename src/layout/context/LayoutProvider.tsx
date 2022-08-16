import React, { FC } from "react";
import Layoutcontext from "./Layoutcontext";
import { IUseLayout } from "./LayoutContext.types";
import useLayout from "./useLayout";

const LayoutProvider: FC<IUseLayout> = ({ children }) => {
  const value = useLayout();
  return (
    <Layoutcontext.Provider value={value}>{children}</Layoutcontext.Provider>
  );
};

export default LayoutProvider;
