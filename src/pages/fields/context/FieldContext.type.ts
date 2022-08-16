import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";
import { ICommonRequest } from "layout/context/LayoutContext.types";

export interface IUseFiled {
  state: {
    createFieldStates: {
      createFieldData: IResponseData<string>;
      createFieldStatus: TApiRequestStatus;
      createFieldError: any;
    };

    editFieldStates: {
      editFieldData: any,
      editFieldStatus :TApiRequestStatus,
      editFieldError: any,
    },
  };
  actions: {
    createField: (fieldRequest: ICommonRequest) => void;
    editField: (body: any) => void
  };
}

export interface IFieldType{
  
}
