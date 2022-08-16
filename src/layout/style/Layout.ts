import styled from "styled-components";
import {
  sidebarOpenWith,
  sidebarCloseWith,
} from "../../components/shared/Sidebar/Sidebar.constants";
import { ILayoutStyledProps } from "../types/Layout";
import { height } from "components/shared/Header/Header.constants";
export const LayoutStyled = styled.div<ILayoutStyledProps>`
  height: 100vh;
  display: flex;

  .wrapper {
    overflow-y: auto;

    background-color: #f8f8f8;
    width: 100%;
    transition: all 0.3s linear;
    padding-top: ${height};
    .wrapper-content {
      transition: all 0.3s linear;
      padding: 20px;
      padding-left: ${(props) => (props.collapse ? 20 : 20)}px;
    }
  }
  .sidebar-content {
    transition: all 0.3s linear;
  }
`;
