import { TApiRequestStatus } from "hooks/useRequest/useRequest.types";

export interface IUseUser {
  state: {
    addUserStates: {
      addUserData: any;
      addUserStatus: TApiRequestStatus;
      addUserError: any;
    };
    editUserStates: {
      editUserData: any;
      editUserStatus: TApiRequestStatus;
      editUserError: any;
    };
    getFieldsStates: {
      getFieldsData: any;
      getFieldsStatus: TApiRequestStatus;
      getFieldsError: any;
    };
    getPositionsState: {
      getPositionsData: any;
      getPositionsStatus: TApiRequestStatus;
      getPositionsError: any;
    };
  };
  actions: {
    addUser: (body: any) => Promise<void>;
    editUser: (body: any) => Promise<void>;
    getFields: () => Promise<void>;
    getPositions: () => Promise<void>;
  };
}
