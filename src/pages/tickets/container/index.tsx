import Tickets from "./Tickets";
import TicketsProvider from "./../context/TicketsProvider";

const index = () => {
  return (
    <TicketsProvider>
      <Tickets />
    </TicketsProvider>
  );
};

export default index;
