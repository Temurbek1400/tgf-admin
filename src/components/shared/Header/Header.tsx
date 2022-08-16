import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderStyled } from "./Header.style";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
  const { pathname } = useLocation();
  const list = pathname.split("/");
  return (
    <HeaderStyled>
      <div className="container ">
        <div className="d-flex header" >
          <h2 className="section-title">{list[1]}</h2>
          <div className="header-icon">
            <div className="icon-wrapper">
              <MailOutlineIcon />
            </div>
            <div className="icon-wrapper">
              <NotificationsNoneIcon />
            </div>
            <div className="icon-wrapper">
              <ZoomOutMapIcon />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
