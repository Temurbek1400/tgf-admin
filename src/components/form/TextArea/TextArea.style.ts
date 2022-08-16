import styled from "styled-components";
import { TextAreaStyledType } from "./TextArea.types";

export const TextAreaStyled = styled.textarea<TextAreaStyledType>`
  border: 1px solid ${(props) => (props.isError ? "red" : "##f1f1f1")};
  border-radius: 28px;
  outline: none;
  padding: 15px;
  height: 150px;
  width: 100%;
  font-size: 16px;
`;
