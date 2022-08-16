import styled from "styled-components";
import { Button } from "@mui/material";
import get from "lodash.get";
import { IShowMoreStyled } from "./ShowMoreButton.types";
export const ShowMoreStyled = styled(Button)<IShowMoreStyled>`
  background-color: transparent !important;
  margin: 5px 0;
  text-transform: inherit !important;

  .MuiTouchRipple-root.css-8je8zh-MuiTouchRipple-root {
    display: none;
  }
  span {
    font-weight: 600 !important;
  }
  svg {
    transition: all 0.1s linear;
    transform: ${({ open }) => (!open ? "rotateX(0)" : "rotateX(180deg)")};
    path {
      stroke: ${({ theme }) => get(theme, "primary.main")};
    }
  }
`;

export const SowMoreButtonContentStyled = styled.div<IShowMoreStyled>`
  position: relative;
  display: block;

  transition: all 0.2s linear;
  .show-button-shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: ${({ open }) => (!open ? "1" : "0")};
    box-shadow: rgba(255, 255, 255, 1) 0px -20px 40px 40px,
      rgba(255, 255, 255, 1) 0px -15px 15px 10px;
  }
`;
