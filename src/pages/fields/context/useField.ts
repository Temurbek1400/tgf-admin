import { useRequest } from "hooks/useRequest/useRequest";
import { ICommonRequest } from "layout/context/LayoutContext.types";
import { IUseFiled } from "./FieldContext.type";

const useField = (): IUseFiled => {
  const [
    createFieldClient,
    createFieldData,
    createFieldStatus,
    createFieldError,
  ] = useRequest(); 

  const createField = (fieldRequest: ICommonRequest) => {
    createFieldClient.post("/field", { name: { ...fieldRequest } });
  };

  const [ 
    editFieldClient,
    editFieldData,
    editFieldStatus,
    editFieldError,
  ] = useRequest(); 

  const editField = async (body: any) => {
    await editFieldClient.put(`/field`, body);
  };

  return {
    state: {
      createFieldStates: {
        createFieldData,
        createFieldStatus,
        createFieldError,
      },

      editFieldStates: {
        editFieldData,
        editFieldStatus,
        editFieldError,
      },
    },
    actions: { createField, editField },
  };
};

export default useField;
