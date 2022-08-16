import {
  IResponseData,
  TApiRequestStatus,
} from "hooks/useRequest/useRequest.types";

export interface IUseLogin {
  state: {
    loginStates: {
      loginData: IResponseData<string>;
      loginStatus: TApiRequestStatus;
      loginError: any;
    };
  };
  actions: { login: (loginRequest: ILoginRequestData) => void };
}

export interface ILoginRequestData {
  phoneNumber: string;
  password: string;
}
