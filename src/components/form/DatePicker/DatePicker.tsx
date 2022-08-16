import React, { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MUiDatePicker from "@mui/lab/DatePicker";
import { Label, Error } from "components/index";
import { DatePickerPropsType } from "./DatePicker.types";
import { StyledDatePicker } from "./DatePicker.style";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const DatePicker: FC<DatePickerPropsType> = ({
  label = "",
  name = "",
  error,
  control,
  setError,
  clearErrors,
  rules = { required: false },
  views = ["year", "month", "day"],
  disableFuture = false,
  minDate,
  setIsValid,
  isValid,
}) => {
  const { t } = useTranslation();

  const datePickerChange = (date: any) => {
    if (views.length > 1) {
      if (date?.toString() === "Invalid Date") {
        setIsValid(false);
        console.log(date);
        setError(name, { type: "required", message: t("COMMON.INVALID_DATE") });
      } else if (minDate && date?.getFullYear() < new Date().getFullYear()) {
        setIsValid(false);
        setError(name, { type: "required", message: t("COMMON.INVALID_DATE") });
      } else {
        setIsValid(true);
        clearErrors(name);
      }
    }
  };

  return (
    <StyledDatePicker
      id="datepicker"
      className={error || (minDate && !isValid && !error) ? "error" : ""}
    >
      {label && <Label value={label} />}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value = null, ...field } }) => {
          return (
            <>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MUiDatePicker
                  disableOpenPicker={true}
                  minDate={minDate ? new Date() : null}
                  disableFuture={disableFuture}
                  openTo="year"
                  value={value}
                  views={[]}
                  onChange={(e: any) => {
                    onChange(e);
                    datePickerChange(e);
                  }}
                  renderInput={(e: any) => <TextField {...e} />}
                  {...field}
                />
              </LocalizationProvider>
            </>
          );
        }}
      />
      {minDate && !isValid && !error && (
        <p className="not-valid">{t("COMMON.INVALID_DATE")}</p>
      )}
      {!!error && <Error message={error.message} />}
    </StyledDatePicker>
  );
};

export default DatePicker;
