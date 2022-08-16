import { Button } from "@mui/material";
import get from "lodash.get";
import styled from "styled-components";

export const SaveButtonStyled = styled(Button)`
  padding: 10px 60px !important;
  border-radius: 8px !important;
  overflow: hidden;
  text-transform: capitalize !important;
  position: relative;
  color: ${({theme})=> get(theme, "palette.common.white")} !important;
  background-color:  #4340DA !important;
  box-shadow: none !important;
  .buttonLoader {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    .backgroundOpacity {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #fff;
      opacity: 0.4;
      z-index: 1;
    }
    .MuiCircularProgress-root.MuiCircularProgress-indeterminate {
      margin: 0 auto;
      color: #fff;
      width: 35px !important;
      height: 35px !important;
    }
  }
`;
