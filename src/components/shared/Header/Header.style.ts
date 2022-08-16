import get from "lodash.get";
import styled from "styled-components";
import { height } from "./Header.constants";
export const HeaderStyled = styled.div`
  width: calc(100% - 130px);
  background: #f1f1f1;
  transition: all 0.3s linear;
  height: ${height};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    h2 {
      text-transform: capitalize;
    }

    &-icon {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-wrapper {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 16px;
        transition: all 0.3s linear;
        svg path {
          fill: #8992a9; // ${({ theme }) => get(theme, "grey.800")}
        }
        &:hover {
          background-color: white;
          svg path {
            fill: #3b72ff;
          }
        }
      }
    }
  }
`;
