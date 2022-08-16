import { useRequest } from "hooks/useRequest/useRequest";

export const usePaginationTable = (): any => {
  const [getBodyClient, getBodyRes, tableBodyStatus, tableBodyError] =
    useRequest();
  const [
    deleteItemsClient,
    deleteItemsData,
    deleteItemsStatus,
    deleteItemsError,
  ] = useRequest();
  const deleteRequest = async (dataUrl: string, ids: string[]) => {
    const data = {
      ids,
    };
    await deleteItemsClient.deleteRequest(`${dataUrl}`, data);
  };

  const getContent = (url: string, search: string) => {
    getBodyClient.get(url + search);
  };

  return {
    state: {
      contentStore: {
        res: getBodyRes,
        status: tableBodyStatus,
        error: tableBodyError,
      },
      deleteItems: {
        res: deleteItemsData,
        status: deleteItemsStatus,
        error: deleteItemsError,
      },
    },
    actions: { getContent, deleteRequest },
  };
};
