import React, { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { CheckboxContentStyled } from "./Checkbox.style";
import { ICheckboxProps } from "./Checkbox.types";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import get from "lodash.get";

const Checkbox: FC<ICheckboxProps> = ({
  control,
  name,
  errors,
  rules = { required: false },
  label,
  defaultChecked = false,
  labelAlign = "end",
  className,
  FORM_NAMES,
  ...props
}) => {
  const checkboxRef = useRef<HTMLButtonElement>(null);

  const focus = async () => {
    if (checkboxRef.current !== null) {
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let checkboxNode: any = checkboxRef?.current?.childNodes[0];
          let key = firstErrorField(FORM_NAMES, errors);
          if (key === name) {
            checkboxNode?.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    focus();
  }, [errors && get(errors, `${name}`, undefined)]);

  return (
    <CheckboxContentStyled className={className}>
      <FormControlLabel
        labelPlacement={labelAlign}
        control={
          <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultChecked || false}
            render={({ field: { ...field } }) => (
              <MuiCheckbox
                {...field}
                {...props}
                checked={field.value || false}
                ref={checkboxRef}
              />
            )}
          />
        }
        label={label}
      />

      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </CheckboxContentStyled>
  );
};

export default Checkbox;
