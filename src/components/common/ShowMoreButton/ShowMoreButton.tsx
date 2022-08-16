import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";
import {
  ShowMoreStyled,
  SowMoreButtonContentStyled,
} from "./ShowMoreButton.style";
import { IShowMoreButton } from "./ShowMoreButton.types";

const ShowMoreButton: FC<IShowMoreButton> = ({ open, setOpen, children }) => {
  return (
    <SowMoreButtonContentStyled open={open}>
      <div className="show-button-shadow"></div>
      <ShowMoreStyled
        className="d-flex "
        onClick={() => setOpen(!open)}
        open={open}
      >
        <span className="me-2">{children}</span>
        <span>
          <ExpandMoreIcon width="13px" height="8px" />
        </span>
      </ShowMoreStyled>
    </SowMoreButtonContentStyled>
  );
};

export default ShowMoreButton;
