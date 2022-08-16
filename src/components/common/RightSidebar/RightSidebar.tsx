import CancelButton from "components/form/CancelButton/CancelButton";
import SaveButton from "components/form/SaveButton/SaveButton";
import React, { FC } from "react";
import { RightSidebarStyled } from "./RightSidebar.style";
import { IRightSidebar } from "./RightSidebar.types";

const RightSidebar: FC<IRightSidebar> = ({
  children,
  open,
  setOpen,
  title,
  onSave,
  onClose = () => {},
  form,
}) => {
  return (
    <RightSidebarStyled open={open}>
      <h2>{title}</h2>

      {children}
      <div className="btn-group">
        <SaveButton onClick={onSave} form={form} />
        <CancelButton
          onClick={() => {
            onClose?.();
            setOpen(false);
          }}
        />
      </div>
    </RightSidebarStyled>
  );
};

export default RightSidebar;
