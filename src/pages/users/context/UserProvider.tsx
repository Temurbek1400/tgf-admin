import { FC } from "react";
import useUser from "./useUser";
import UserContext from "./UserContext";

const UserProvider: FC = ({ children }) => {
  const value = useUser();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
