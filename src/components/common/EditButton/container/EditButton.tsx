import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { IEditButtonProps } from "./EditButton.types";
import { IconButtonStyled } from "./EditButton.style";
import EditIcon from "../assets/EditIcon";
const EditButton: FC<IEditButtonProps> = ({ to, onClick }) => {
  return (
    <div onClick={(e: any) => e.stopPropagation()}>
      {to ? (
        <Link to={to} className="text-decoration-none">
          <Tooltip title="Edit">
            <IconButtonStyled>
              <EditIcon />
            </IconButtonStyled>
          </Tooltip>
        </Link>
      ) : (
        <Tooltip title="Edit" onClick={onClick}>
          <IconButtonStyled>
            <EditIcon />
          </IconButtonStyled>
        </Tooltip>
      )}
    </div>
  );
};

export default EditButton;
