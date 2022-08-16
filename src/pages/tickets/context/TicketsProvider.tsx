import { FC } from "react";
import useTickets from "./useTickets";
import TicketsContext from "./TicketsContext";

const TicketsProvider: FC = ({ children }) => {
  const value = useTickets();
  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
};

export default TicketsProvider;
