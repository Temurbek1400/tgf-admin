import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";
import { ICommonRequest } from "layout/context/LayoutContext.types";

export interface IUseAgenda {
  state: {
    createAgendaStates: {
      createAgendaData: IResponseData<string>;
      createAgendaStatus: TApiRequestStatus;
      createAgendaError: any;
    };

    editAgendaStates: {
      editAgendaData : any,
      editAgendaStatus : TApiRequestStatus,
      editAgendaError: any,
    },

    getSpeakerStates:{
      getSpeakerData: any,
      getSpeakerStatus : TApiRequestStatus,
      getSpeakerError: any,
    }
  };
  actions: {
    createAgenda: (agendaRequest: IAgendaType) => void;
    editAgenda: (agendaRequest: any) => void;
    getSpeaker: ()=> void
  };
}

export interface IAgendaType {
  type: {
    name: string;
    id:string;
  }
  startTime: string;
  endTime: string;
  name: {
    uz?: string;
    ru?: string;
    en?: string;
  };
  speakerId?: string;
}

export interface IAgenda {
  name: ICommonRequest;
  _id?: string;
  startTime: string;
  endTime: string;
  speakerId?: string;
  type: string;
  speaker:{
    id:string;
    name:string;
  }
}
