import { IColumn } from "components/common/PaginationTable/types/PaginationTable";

export interface ITableSkeletonProps {
  tableBodyRowCount: number;
  columns: IColumn[];
}
