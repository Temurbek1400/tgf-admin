import { useRequest } from "hooks/useRequest/useRequest";
import { IAgendaType, IUseAgenda } from "./AgendaContext.type";

const useAgenda = (): IUseAgenda => {
  const [
    createAgendaClient,
    createAgendaData,
    createAgendaStatus,
    createAgendaError, 
  ] = useRequest();

  const createAgenda = (agendaRequest: IAgendaType) => {
    createAgendaClient.post("/agenda", { ...agendaRequest });
  };

  const [ 
    editAgendaClient,
    editAgendaData,
    editAgendaStatus,
    editAgendaError,
  ] = useRequest(); 

  const editAgenda = async (body: any) => {
    await editAgendaClient.put(`/agenda`, body);
  };

  const [ 
    getSpeakerClient,
    getSpeakerData,
    getSpeakerStatus,
    getSpeakerError,
  ] = useRequest(); 

  const getSpeaker = async () => {
    await getSpeakerClient.get(`/speaker`);
  };


  return {
    state: {
      createAgendaStates: {
        createAgendaData,
        createAgendaStatus,
        createAgendaError,
      },

      editAgendaStates: {
        editAgendaData,
        editAgendaStatus,
        editAgendaError,
      },

      getSpeakerStates:{
        getSpeakerData,
        getSpeakerStatus,
        getSpeakerError,
      }
    },
    actions: { createAgenda, editAgenda, getSpeaker },
  };
};

export default useAgenda;
