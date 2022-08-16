import { TextField } from "@mui/material";
import React, { FC } from "react";
import { DateInputStyled } from "./DateInput.style";
import { IDateInput } from "./DateInput.type";

const DateInput: FC<IDateInput> = ({ value, setValue, label }) => {
  return (
    <DateInputStyled>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="datetime-local"
        label={label}
        placeholder="Start time *"
        type="datetime-local"
        lang="ru"
        sx={{ width: 250 }}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
    </DateInputStyled>
  );
};

export default DateInput;
