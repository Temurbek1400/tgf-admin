import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import get from "lodash.get";
import React, { FC, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { RadioButtonsStyled } from "./RadioButton.style";
import { IRadioButtonProps } from "./RadioButton.types";

const RadioButton: FC<IRadioButtonProps> = ({
  control,
  name,
  options = [],
  rules,
  errors,
  labelKey = "",
  valueKey = "",
  defaultValue,
  FORM_NAMES,
  ...props
}) => {
  const radioRef = useRef<HTMLDivElement>(null);

  const focus = async () => {
    if (radioRef.current !== null) {
      let radioButtonNode: any =
        radioRef?.current?.childNodes[0]?.childNodes[0]?.childNodes[0];
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            radioButtonNode?.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    focus();
  }, [errors && get(errors, `${name}`)]);

  return (
    <RadioButtonsStyled>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <RadioGroup
            {...field}
            {...props}
            row
            name={name}
            value={field.value || ""}
            ref={radioRef}
          >
            {options?.map((option: any, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  value={option[valueKey]}
                  control={<Radio />}
                  label={option[labelKey]}
                />
              );
            })}
          </RadioGroup>
        )}
      />
      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </RadioButtonsStyled>
  );
};

export default RadioButton;
