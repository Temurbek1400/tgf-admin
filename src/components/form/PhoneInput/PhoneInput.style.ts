import styled from "styled-components";
import MaskInput from "react-input-mask";
export const MaskInputStyled = styled(MaskInput)`
  border-radius: 12px;
  border: 1px solid #EDF1FF;
  box-sizing: border-box;
  width: 100%;
  padding: 14px 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  outline: none;
  transition: all 300ms ease-out;

  &::placeholder {
    color: #333;
  }
  &:focus {
    box-shadow: none;
    color: #8b90a5;
    border-color: #edf1ff;
  }
  &.error {
    border-color: red;
  }
`;
