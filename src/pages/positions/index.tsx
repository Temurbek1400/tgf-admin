import Position from "./container/Position";
import PositionProvider from "./context/PositionProvider";

const index = () => {
  return (
    <PositionProvider>
      <Position />
    </PositionProvider>
  );
};

export default index;
