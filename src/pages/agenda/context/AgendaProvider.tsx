import React, { FC } from "react";
import AgendaContext from "./AgendaContext";
import useAgenda from "./useAgenda";

const AgendaProvider: FC = ({ children }) => {
  const value = useAgenda();
  return (
    <AgendaContext.Provider value={value}>{children}</AgendaContext.Provider>
  );
};

export default AgendaProvider;
