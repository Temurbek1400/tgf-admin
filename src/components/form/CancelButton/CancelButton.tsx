import { CircularProgress } from "@mui/material";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import { FC, useEffect } from "react";
import { CancelButtonStyled } from "./CancelButton.style";
import { IButton } from "./CancelButton.types";
import { toast } from "react-hot-toast";

const CancelButton: FC<IButton> = ({
  type = "button",
  disabled = false,
  status = REQUEST_STATUS.initial,
  fullWidth = false,
  onClick = () => {},
  ...props
}) => {
  useEffect(() => {
    if (status === REQUEST_STATUS.success) {
      toast.success("Saved!");
    }
  }, [status]);

  return (
    <CancelButtonStyled
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      variant={"contained"}
      {...props}
    >
      {status === REQUEST_STATUS.loading && (
        <div className="buttonLoader">
          <div className="backgroundOpacity" />
          <CircularProgress />
        </div>
      )}
      Cancel
    </CancelButtonStyled>
  );
};

export default CancelButton;
