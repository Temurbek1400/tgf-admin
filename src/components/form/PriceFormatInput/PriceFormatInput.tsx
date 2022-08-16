import { Input } from "@mui/material";
import get from "lodash.get";
import React, { FC, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import Label from "../Label/Label";
import { PriceInputContentStyled } from "./PriceFormatInput.style";
import { IPriceFormatInputProps } from "./PriceFormatInput.types";

const PriceFormatInput: FC<IPriceFormatInputProps> = ({
  control,
  name,
  label,
  rules,
  className,
  errors,
  setFocus,
  FORM_NAMES,
  setValue,
  ...props
}) => {
  const numberFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
    let convertPriceFormat = event.target.value
      ?.replace(/[^\d.-]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    setValue(name, convertPriceFormat);

    // if (isNaN(parseFloat(string))) {
    //   return undefined;
    // }
    // return string
    //   ?.replace(/[^\d.-]/g, "")
    //   .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const inputRef = useRef<HTMLInputElement>(null);
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
  }, [errors && get(errors, `${name}`)]);

  return (
    <PriceInputContentStyled
      className={className}
      isError={!!errors && !!get(errors, `${name}`, undefined)}
    >
      {label && <Label value={label} />}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, ...field } }) => (
          <input
            {...props}
            {...field}
            value={field.value || ""}
            onChange={(e) => {
              onChange(e);
              numberFormat(e);
            }}
            type="text"
            ref={inputRef}
          />
        )}
      />

      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </PriceInputContentStyled>
  );
};

export default PriceFormatInput;
