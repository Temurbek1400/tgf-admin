import { useRequest } from "hooks/useRequest/useRequest";
import { IUsePosition } from "./PositionContext.type";
import { IPosition } from "./../container/Position.types";
import { ICommonRequest } from "layout/context/LayoutContext.types";

const usePosition = (): IUsePosition => {
  const [
    createPositionClient,
    createPositionData,
    createPositionStatus,
    createPositionError,
  ] = useRequest();

  const createPosition = (positionRequest: ICommonRequest) => {
    createPositionClient.post("/position", { name: { ...positionRequest } });
  };

  const [
    editPositionClient,
    editPositionData,
    editPositionStatus,
    editPositionError,
  ] = useRequest(); 

  const editPosition = async (body: any) => {
    await editPositionClient.put(`/position`, body);
  };

  return {
    state: {
      createPositionStates: {
        createPositionData,
        createPositionStatus,
        createPositionError,
      },
      editPositionState: {
        editPositionData,
        editPositionStatus,
        editPositionError,
      },
    },
    actions: { createPosition, editPosition },
  };
};

export default usePosition;
