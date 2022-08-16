import { TableRow as MuiTableRow } from "@mui/material";
import { memo } from "react";

const TableRow = ({ children, ...props }: any) => {
  return (
    <MuiTableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      {...props}
    >
      {children}
    </MuiTableRow>
  );
};

export default memo(TableRow);
