import { ICustomProviderProps } from "interfaces/form";
import LoginContext from "./LoginContext";
import { useLogin } from "./useLogin";

const LoginProvider = ({ children }: ICustomProviderProps) => {
  const value = useLogin();
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
