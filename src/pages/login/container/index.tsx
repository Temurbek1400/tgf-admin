import LoginProvider from "../context/LoginProvider";
import Login from "./Login";

const index = () => {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
};

export default index;
