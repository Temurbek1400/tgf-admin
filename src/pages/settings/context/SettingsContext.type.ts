import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";

export interface IUseSettings {
  state: {
    setMapStates: {
      setMapData: IResponseData<string>;
      setMapStatus: TApiRequestStatus;
      setMapError: any;
    };
  };
  actions: {
    setMap: (setMapRequest: any) => void;
  };
}

