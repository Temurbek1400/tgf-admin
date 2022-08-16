import {
  Skeleton,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import TableRow from "components/common/PaginationTable/components/TableRow/TableRow";
import { IColumn } from "components/common/PaginationTable/types/PaginationTable";

import { ITableSkeletonProps } from "./TableSkeloton.types";

const TableSkeleton = ({
  columns,
  tableBodyRowCount = 5,
}: ITableSkeletonProps) => {
  let array = new Array(tableBodyRowCount);
  return (
    <MuiTable>
      <TableHead>
        <MuiTableRow>
          {columns?.map((item: IColumn, index: number) => (
            <TableCell key={index}>
              <Skeleton
                sx={{ backgroundColor: "rgba(94, 88, 115,0.4)" }}
                variant="text"
              />
            </TableCell>
          ))}
        </MuiTableRow>
      </TableHead>
      <TableBody>
        {[...array].map((_, index) => (
          <TableRow key={index}>
            {columns?.map((item: IColumn, index: number) => (
              <TableCell key={index}>
                <Skeleton variant="text" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default TableSkeleton;
