import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";
import { ICommonRequest } from "layout/context/LayoutContext.types";

export interface IUseSpeakers {
  state: {
    createSpeakersStates: {
      createSpeakersData: IResponseData<string>;
      createSpeakersStatus: TApiRequestStatus;
      createSpeakersError: any;
    };

    editSpeakerState: {
      editSpeakerData: any;
      editSpeakerStatus: TApiRequestStatus;
      editSpeakerError: any;
    };
  };
  actions: {
    createSpeakers: (body: any) => void;
    editSpeaker: (body: any) => Promise<void>;
  };
}

export interface ISpeakersType {
  name: ICommonRequest;
  bio: ICommonRequest;
}
