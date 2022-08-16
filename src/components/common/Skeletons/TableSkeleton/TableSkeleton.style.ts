import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { IStyledTablePagination } from "components/common/PaginationTable/types/PaginationTable";

export const StyledPaginationGrid = styled(Grid)<any>(({ height }) => ({
  width: "100%",
  height,
}));
