import styled from "@emotion/styled";
import { IInputContentStyled } from "./Input.types";

export const InputContentStyled = styled("div")<IInputContentStyled>`
  position: relative;
  &:hover{
    .cancel{
      display: block;
    }
  }
  input {
    min-width: 350px;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isError ? "red" : "#EDF1FF")};
    width: 100%;
    color: #333;
    padding: 11px 50px 11px 12px;
    outline: none;
    font-size: 17px;
    background-color: #f6f6f6;

  }

  .cancel {
    position: absolute;
    /* display: none; */
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    cursor: pointer;
    path {
      fill: #747474;
    }
  }
`;
