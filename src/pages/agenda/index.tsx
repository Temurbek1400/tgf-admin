import Agenda from "./container/Agenda";
import AgendaProvider from "./context/AgendaProvider";

const index = () => {
  return (
    <AgendaProvider>
      <Agenda />
    </AgendaProvider>
  );
};

export default index;
