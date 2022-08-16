import React, { FC } from "react";
import SettingsContext from "./SettingsContext";
import useSettings from "./useSettings";

const SettingsProvider: FC = ({ children }) => {
  const value = useSettings();
  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  );
};

export default SettingsProvider;
