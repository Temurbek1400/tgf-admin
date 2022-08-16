import { useRequest } from "hooks/useRequest/useRequest";
import { ILoginRequestData } from "./LoginContext.types";

export const useLogin = () => {
  const [loginClient, loginData, loginStatus, loginError] = useRequest();

  const login = (loginRequest: ILoginRequestData) => {
    loginClient.post("login", { ...loginRequest });
  };

  return {
    state: {
      loginStates: { loginData, loginStatus, loginError },
    },
    actions: { login },
  };
};
