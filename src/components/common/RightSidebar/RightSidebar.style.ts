import styled from "styled-components";
import { ISidebarStyle } from "./RightSidebar.types";

export const RightSidebarStyled = styled.div<ISidebarStyle>`
  background-color: white;
  position: fixed;
  right: ${({ open }) => (open ? 0 : "-400px")};
  min-width: 400px;
  width: 400px;
  padding: 32px 24px;
  height: 100vh;
  top: 0;
  box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.2s linear;
  z-index: 5;
  & > h2 {
    margin-bottom: 60px;
  }

  .btn-group {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
