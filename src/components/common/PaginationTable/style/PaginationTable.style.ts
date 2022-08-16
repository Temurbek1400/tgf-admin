import { styled } from "@mui/system";
import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import get from "lodash.get";
import {
  IStyledPaper,
  IStyledTableBodyRow,
  IStyledTablePagination,
} from "../types/PaginationTable";

export const TableCellHeaderStyle = styled(TableCell)({
  fontSize: "14px",
  color: "rgb(94, 88, 115)",
  backgroundColor: "#fff",
});
export const TableHeadStyled = styled(TableHead)`
  background-color: #fff;
  .first-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .actions {
      button {
        background: transparent;
        outline: none;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        border-radius: 10px;
        margin-right: 20px;
        transform: scale(1.2);
        svg path {
          fill: #8992a9;
        }
        &:hover {
          background-color: #e3ebff;
          svg path {
            fill: #3b72ff;
          }
          cursor: pointer;
        }
        &:disabled {
          &:hover {
            cursor: default;
          }
          svg path {
            fill: #8992a9;
          }
          background-color: transparent;
          opacity: 0.5;
        }
      }
    }
  }
  .search-row {
    display: flex;
    align-items: center;
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      svg path {
        fill: ${({ theme }) => get(theme, "palette.primary.dark")};
      }
    }
    input {
      width: 100%;
      outline: none;
      border: none;
      background: transparent;
      font-size: 18px;
    }
  }
`;

export const TableCellBodyStyle = styled(TableCell)({
  fontSize: "13px",
});

export const StyledIndexTableCell = styled(TableCell)({
  width: "1%",
});

export const StyledTableContainer = styled(TableContainer)({
  height: "calc(100% - 60px)",
});

export const StyledTableBodyRow = styled(TableRow)<any>(({ isRowClick }) => ({
  "&:hover": {
    backgroundColor: isRowClick && "rgba(0, 0, 0, 0.04)",
    cursor: isRowClick && "pointer",
  },
}));

export const StyledPaper = styled(Paper)<any>(({ height }) => ({
  minHeight: "300px",
  width: "100%",
  overflow: "hidden",
  height: height ? height : "calc(100vh - 149px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "12px",
}));

export const StyledTablePagination = styled(TablePagination)<any>({
  height: "60px",
});
// MuiTablePagination-selectLabel

export const StyledDetailPanelTableCell = styled(TableCell)({
  boxShadow: "rgb(223 223 219 / 50%) 0px 0px 20px 0px inset",
});
