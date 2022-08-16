import React, { FC, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { TextAreaPropsType } from "./TextArea.types";
import { TextAreaStyled } from "./TextArea.style";
import Label from "../Label/Label";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import get from "lodash.get";

const TextArea: FC<TextAreaPropsType> = ({
  label = "",
  className = "",
  errors,
  name = "",
  rules = { required: false },
  control,
  FORM_NAMES,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const focus = async () => {
    if (textareaRef.current !== null) {
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            textareaRef?.current?.focus();
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
      {label && <Label value={label} />}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { ...field } }) => (
          <TextAreaStyled
            {...props}
            {...field}
            isError={!!errors && !!get(errors, `${name}`, false)}
            ref={textareaRef}
          />
        )}
      />

      {errors && get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`)?.message} />
      )}
    </div>
  );
};

export default TextArea;
