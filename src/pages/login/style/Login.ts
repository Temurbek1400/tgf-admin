import get from "lodash.get";
import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  .login {
    padding: 36px;
    background-color: white;
    box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
    border-radius: 16px;
    &-page-title {
      font-family: "Courier New", Courier, monospace;
    }

    form {
      input{
        padding: 14px !important;
      }
      .cancel {
        display: none !important;
      }

      button{
        width: 100%;
        border-radius: 8px;
        padding: 12px 0;
        text-transform: capitalize;
        background-color:#4340DA !important;  // ${({theme})=>get(theme, "palette.primary.dark")} !important;
      }
    }
  }
`;
