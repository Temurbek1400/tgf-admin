import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem, SidebarContent, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import get from "lodash.get";
import MenuIcon from "./assets/MenuIcon";
import { SIDEBAR_LIST } from "./Sidebar.constants";
import {
  MenuStyled,
  ProSidebarStyled,
  SidebarHeaderStyled,
  SidebarWrapper,
  MenuItemStyled,
  SubMenuStyled,
} from "./Sidebar.style";
import { ISidebarProps } from "./Sidebar.types";
import UserIcon from "./assets/UserIcon";

const Sidebar: FC<ISidebarProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarWrapper>
      <ProSidebarStyled collapsed={true} collapsedWidth={130} breakPoint="md">
        <SidebarHeaderStyled>
          <div className="menu-icon">
            <UserIcon />
          </div>
        </SidebarHeaderStyled>
        <SidebarContent>
          <MenuStyled iconShape="circle">
            {SIDEBAR_LIST.map((item) => {
              if (get(item, "children", undefined)) {
                return (
                  <SubMenuStyled
                    key={item.key}
                    className={`text-black ${
                      location.pathname.includes(item.path) && "current-path"
                    }`}
                    title={item.text}
                    icon={item.icon}
                  >
                    {get(item, "children")?.map((child) => (
                      <MenuItem
                        key={child.key}
                        onClick={() => navigate(child.path)}
                        className={`text-black`}
                      >
                        {child.text}
                      </MenuItem>
                    ))}
                  </SubMenuStyled>
                );
              }
              return (
                <MenuItemStyled
                  key={item.key}
                  onClick={() => navigate(item.path)}
                  className={`text-black ${
                    (location.pathname === item.path ||
                      location.pathname === item.path.split("?")[0]) &&
                    "current-path"
                  }`}
                  icon={item.icon}
                >
                  {item.text}
                </MenuItemStyled>
              );
            })}
          </MenuStyled>
        </SidebarContent>
      </ProSidebarStyled>
    </SidebarWrapper>
  );
};

export default Sidebar;
