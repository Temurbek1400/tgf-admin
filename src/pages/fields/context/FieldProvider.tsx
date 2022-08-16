import React, { FC } from "react";
import FieldContext from "./FieldContext";
import useField from "./useField";

const FieldProvider:FC = ({ children }) => {
  const value = useField();
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
};

export default FieldProvider;
