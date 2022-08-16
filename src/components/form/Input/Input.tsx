import React, { FC, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { Input as MuiInput } from "@mui/material";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import Label from "../Label/Label";
import { InputContentStyled } from "./Input.style";
import { IInputProps } from "./Input.types";
import get from "lodash.get";
import CancelIcon from "@mui/icons-material/Cancel";

const Input: FC<IInputProps> = ({
  control,
  name = "",
  rules = { required: false },
  id,
  label = "",
  className = "",
  errors,
  FORM_NAMES,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focus = async () => {
    if (inputRef.current !== null) {
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            inputRef?.current?.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    focus();
  }, [errors && get(errors, `${name}`, undefined)]);

  const clear = () => {
    if(inputRef.current!==null)
    inputRef.current.value=""
  };

  return (
    <InputContentStyled
      className={className}
      isError={!!errors && !!get(errors, `${name}`, undefined)}
    >
      {label && <Label value={label} />}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { ...field } }) => (
          <input {...props} {...field} value={field.value || ""} ref={inputRef} />
        )}
      />
      <CancelIcon className="cancel" onClick={clear} />
      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </InputContentStyled>
  );
};

export default Input;
