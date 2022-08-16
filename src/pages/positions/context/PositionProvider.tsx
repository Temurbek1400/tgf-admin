import { FC } from "react";
import PositionContext from "./PositionContext";
import usePosition from "./usePosition";

const PositionProvider: FC = ({ children }) => {
  const value = usePosition();
  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionProvider;
