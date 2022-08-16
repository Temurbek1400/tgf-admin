import styled from "styled-components";

export const PriceInputContentStyled = styled("div")<any>`
  input {
    border-radius: 15px;
    border: 1px solid ${(props) => (props.isError ? "red" : "#f1f1f1")};
    width: 100%;
    color: #333;
    padding: 14px;
    outline: none;
  }
`;
