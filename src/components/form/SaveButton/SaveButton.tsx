import { CircularProgress } from "@mui/material";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import { FC, useEffect } from "react";
import { SaveButtonStyled } from "./SaveButton.style";
import { IButton } from "./SaveButton.types";
import { toast } from "react-hot-toast";

const SaveButton: FC<IButton> = ({
  type = "button",
  disabled = false,
  status = REQUEST_STATUS.initial,
  fullWidth = false,
  form="",
  onClick = () => {},
  ...props
}) => {
  useEffect(() => {
    if (status === REQUEST_STATUS.success) {
      toast.success("Saved!");
    }
  }, [status]);

  return (
    <SaveButtonStyled
      disabled={disabled}
      type={"submit"}
      fullWidth={fullWidth}
      onClick={onClick}
      variant={"contained"}
      form={form}
      {...props}
    >
      {status === REQUEST_STATUS.loading && (
        <div className="buttonLoader">
          <div className="backgroundOpacity" />
          <CircularProgress />
        </div>
      )}
      Save
    </SaveButtonStyled>
  );
};

export default SaveButton;
