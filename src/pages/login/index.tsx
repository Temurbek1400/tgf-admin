import { Route, Routes } from "react-router-dom";
import Login from "./container";

const index = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
    </Routes>
  );
};

export default index;
