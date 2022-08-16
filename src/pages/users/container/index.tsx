import User from "./User";
import UserProvider from "./../context/UserProvider";

const index = () => {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
};

export default index;
