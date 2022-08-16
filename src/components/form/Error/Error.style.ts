import styled from "styled-components";

export const ErrorMessageStyled = styled.div`
  font-size: 13px;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.text.red};
`;
