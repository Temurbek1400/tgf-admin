import { useRequest } from "hooks/useRequest/useRequest";
import { IUseUser } from "./UserContext.type";

const useUser = (): IUseUser => {
  const [addUserClient, addUserData, addUserStatus, addUserError] =
    useRequest();
  const addUser = async (body: any) => {
    await addUserClient.post(`/user`, body);
  };

  const [editUserClient, editUserData, editUserStatus, editUserError] =
    useRequest();
  const editUser = async (body: any) => {
    await editUserClient.put(`/user`, body);
  };

  const [getFieldsClient, getFieldsData, getFieldsStatus, getFieldsError] =
    useRequest();
  const getFields = async () => {
    await getFieldsClient.get(`/field`);
  };

  const [
    getPositionsClient,
    getPositionsData,
    getPositionsStatus,
    getPositionsError,
  ] = useRequest();
  const getPositions = async () => {
    await getPositionsClient.get(`/position`);
  };

  return {
    state: {
      addUserStates: {
        addUserData,
        addUserStatus,
        addUserError,
      },
      editUserStates: {
        editUserData,
        editUserStatus,
        editUserError,
      },
      getFieldsStates: {
        getFieldsData,
        getFieldsStatus,
        getFieldsError,
      },
      getPositionsState: {
        getPositionsData,
        getPositionsStatus,
        getPositionsError,
      },
    },
    actions: { addUser, editUser, getFields, getPositions },
  };
};

export default useUser;
