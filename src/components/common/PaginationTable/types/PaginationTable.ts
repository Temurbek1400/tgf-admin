import { SxProps } from "@mui/material";
import React, { MouseEvent, ReactNode } from "react";
import { JsxElement } from "typescript";

export interface ITableProps {
  url: string;
  columns: IColumn[];
  renderItemProps?: object;
  onRowClick?: (dataItem: any) => void;
  detailPanel?: JsxElement;
  render?: boolean;
  getTableData?: () => () => void;
  onOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAbleItems?: boolean;
}

export interface IColumn {
  name?: string;
  translationKey?: string;
  renderItem?: (
    row: any,
    renderItemProps: any,
    renderTableData: () => void
  ) => ReactNode;
  dataKey?: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
}

export interface IStyledTableBodyRow {
  isRowClick: boolean;
  sx: SxProps | undefined;
  children: ReactNode;
  key: number;
}

export interface IStyledPaper {
  height: string;
}

export interface IStyledTablePagination {
  height: string;
  rowsPerPageOptions?: number[];
  colSpan?: number;
  count: number;
  rowsPerPage: number;
  page: number;
  component: string;
  onPageChange: (event: any, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
