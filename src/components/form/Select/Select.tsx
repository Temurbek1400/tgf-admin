import { FC, ReactNode, useEffect, useRef } from "react";
import { MenuItem, TextField } from "@mui/material";
import { AutoComplateStyled } from "./Select.style";
import { ISelectProps } from "./Select.types";
import Label from "../Label/Label";
import { Controller } from "react-hook-form";
import { debounce } from "../../../services/debounce/debounce";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import { firstErrorField } from "../../../utils/firstErrorField/firstErrorField";
import get from "lodash.get";

const Select: FC<ISelectProps> = ({
  label = "",
  options = [],
  errors,
  name = "",
  className = "",
  handleInputChange,
  control,
  defaultValue = {},
  multiple = false,
  rules = { required: false, message: "" },
  dataKey = "name",
  defaultInputValue = "",
  onChangeSelect,
  placeholder = "",
  FORM_NAMES,
  disabled,
  ...props
}) => {
  const onInputChange = debounce(handleInputChange, 400);
  const selectRef = useRef<HTMLDivElement>(null);

  const renderInput = (renderInputProps: any) => {
    return (
      <TextField
        {...renderInputProps}
        label=""
        placeholder={placeholder}
        onChange={onInputChange}
      />
    );
  };

  const renderOption = (renderOptionProps: any, option: any) => {
    return (
      <MenuItem {...renderOptionProps} key={option?._id}>
        {get(option, `${dataKey}.uz`, "")}
      </MenuItem>
    );
  };

  const focus = async () => {
    if (selectRef.current !== null) {
      let inputNode: any =
        selectRef.current.childNodes[0]?.childNodes[0]?.childNodes[0];
      if (errors) {
        if (!!get(errors, `${name}`, undefined)) {
          let key = firstErrorField(FORM_NAMES, errors);

          if (key === name) {
            inputNode?.focus();
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
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <AutoComplateStyled
              ref={selectRef}
              multiple={multiple}
              options={options}
              disabled={disabled}
              defaultValue={defaultValue}
              className={errors && !!get(errors, `${name}`, "") && "error"}
              getOptionLabel={(option: any) => get(option, `${dataKey}.uz`, "")}
              loadingText="Loading..."
              noOptionsText="Data not found"
              onChange={(event: any, dataItem: any) => {
                onChange(dataItem);
                if (onChangeSelect) {
                  onChangeSelect(dataItem);
                }
              }}
              renderOption={renderOption}
              renderInput={renderInput}
              {...props}
              value={value || {}}
            />
          );
        }}
      />
      {errors && !!get(errors, `${name}`, undefined) && (
        <ErrorMessage value={get(errors, `${name}`, undefined)?.message} />
      )}
    </div>
  );
};

export default Select;
