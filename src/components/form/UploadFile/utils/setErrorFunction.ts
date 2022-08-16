import get from "lodash.get";
import { IErrors } from "../../../../interfaces/form";

export const setErrorFunction = (
  name: string,
  setError: any,
  errors: IErrors | undefined
) => {
  if (setError) {
    setError(name, {
      type: "required",
      message: errors && get(errors, `${name}`)?.message,
    });
  }
};
