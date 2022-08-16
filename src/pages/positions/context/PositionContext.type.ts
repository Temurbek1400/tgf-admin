import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";
import { IPosition } from "../container/Position.types";
import { ICommonRequest } from "layout/context/LayoutContext.types";

export interface IUsePosition {
  state: {
    createPositionStates: {
      createPositionData: IResponseData<string>;
      createPositionStatus: TApiRequestStatus;
      createPositionError: any;
    };
    editPositionState: {
      editPositionData: any;
      editPositionStatus: TApiRequestStatus;
      editPositionError: any;
    };
  };
  actions: {
    createPosition: (positionRequest: ICommonRequest) => void;
    editPosition: (body: any) => Promise<void>;
  };
}
