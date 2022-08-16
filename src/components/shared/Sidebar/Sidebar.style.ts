import { Menu, ProSidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import styled from "styled-components";
import { ISidebarHeaderStyled } from "./Sidebar.types";
import { height } from "components/shared/Header/Header.constants";
export const ProSidebarStyled = styled(ProSidebar)`
  height: 100vh;
  min-width: 100%;
  width: 100%;
  transition: all 0.3s linear !important;

  .pro-sidebar-inner {
    transition: all 0.3s linear !important;
    background: #fff;
    min-width: 100%;
    width: 100%;
  }
`;
export const SidebarWrapper = styled.div``;
export const SidebarHeaderStyled = styled.div<ISidebarHeaderStyled>`
  background-color: #fff;
  position: relative;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  min-height: ${height};
  .menu-icon{
    cursor: pointer;
  }
`;

export const MenuStyled = styled(Menu)`
  ul {
    .pro-menu-item {
      margin-bottom: 3px;
      .pro-inner-item {
        &:hover {
          /* background-color: #ddd; */
          .pro-icon-wrapper .pro-icon svg path {
            fill: #3b72ff;
          }
        }
        .pro-icon-wrapper {
          background-color: transparent !important;
          svg {
            path {
              fill: #8992a9;
            }
          }
        }
        .pro-item-content {
          color: #333;
        }
      }
    }
    .pro-menu-item.pro-sub-menu {
      .react-slidedown.pro-inner-list-item {
        background-color: transparent !important;
      }
      .pro-inner-list-item {
        .popper-inner {
          background-color: #fff !important;
        }
      }
    }
  }
`;
export const SubMenuStyled = styled(SubMenu)`
  margin: auto;
  width: 80px;
  &.current-path {
    transition: all 0.1s linear !important;
    background-color: #e3ebff;
    border-radius: 20%;
    .pro-inner-item .pro-icon-wrapper .pro-icon svg path {
      fill: #3b72ff;
    }
  }

  .pro-inner-item {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px !important;
    .pro-item-content {
      overflow: visible !important;
      font-weight: 600 !important ;
    }
    .pro-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto !important;
      .pro-icon svg {
        transform: scale(1.4) !important;
      }
    }
  }
`;
export const MenuItemStyled = styled(MenuItem)`
  margin: auto;
  width: 80px;
  &.current-path {
    transition: all 0.1s linear !important;
    background-color: #e3ebff;
    border-radius: 20%;
    .pro-inner-item .pro-icon-wrapper .pro-icon svg path {
      fill: #3b72ff;
    }
  }

  .pro-inner-item {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px !important;
    .pro-item-content {
      overflow: visible !important;
      font-weight: 600 !important ;
    }
    .pro-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto !important;
      .pro-icon svg {
        transform: scale(1.4) !important;
      }
    }
  }
`;
