import { Autocomplete } from "@mui/material";
import styled from "styled-components";

export const AutoComplateStyled = styled(Autocomplete)<any>`
  pointer-events: ${(props) => (props.disabled ? " none" : "initial")};
  .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root {
    border-radius: 8px;
    background: #f6f6f6;
    text-transform: capitalize;

    .MuiOutlinedInput-root.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot {
      padding: 0;
      .MuiOutlinedInput-input.MuiInputBase-input {
        width: 100% !important ;
        padding: 10px 12px;
        font-size: 17px;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border: 1px solid #edf1ff;
      border-radius: 8px;
      padding: 10px 12px;
    }
  }
  &.error {
    .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root {
      .MuiOutlinedInput-notchedOutline {
        border-color: red !important;
      }
    }
  }
`;
