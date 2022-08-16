import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { IUploadFileStyled } from "./UploadFile.types";

export const UploadFileStyled = styled.div<IUploadFileStyled>`
  position: relative;
  border: 1px solid ${(props) => (props.isError ? "red" : "#f1f1f1")};
  padding: 25px;
  border-radius: 8px;
  min-width: 500px;

  label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &:hover {
      cursor: pointer;
    }
    .uploadFile {
      width: 100%;
      height: 100%;
      display: none;
    }
    .url {
      position: absolute;
      left: 15px;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .uploadFileIcon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const UploadFileIconLoader = styled(CircularProgress)`
  width: 25px !important;
  height: 25px !important;
`;

export const FocusInputStyled = styled.input`
  max-width: 0 !important;
  max-height: 0 !important;
  opacity: 0;
  padding: 0 !important;
  border: none !important;
`;
