import get from "lodash.get";
import React, { FC, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import Label from "../Label/Label";
import { MaskInputStyled } from "./PhoneInput.style";
import { IPhoneInputProps } from "./PhoneInput.types";

const PhoneInput: FC<IPhoneInputProps> = ({
  errors,
  placeholder = "+998 -- ---  -- --",
  name = "phoneNumber",
  label = "",
  className = "",
  rules = { required: false },
  control,
  FORM_NAMES,
  ...props
}) => {
  const inputRef = useRef<any>(null);

  const focus = async () => {
    if (inputRef.current !== null) {
      console.log(inputRef?.current);
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            inputRef?.current?.getInputDOMNode()?.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    focus();
  }, [errors && get(errors, `${name}`)]);

  return (
    <div className={className}>
      {!!label && <Label value={label} />}
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { value, ...field } }) => {
          return (
            <MaskInputStyled
              mask="+\9\98 99 999 99 99"
              //@ts-ignore
              maskChar="-"
              //@ts-ignore
              className={!!errors && !!errors[name] && "error"}
              placeholder={placeholder}
              {...props}
              {...field}
              value={value || ""}
              ref={inputRef}
            />
          );
        }}
      />

      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </div>
  );
};

export default PhoneInput;
