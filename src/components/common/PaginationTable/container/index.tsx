import { PaginationTableProvider } from "../context";
import PaginationTable from "./PaginationTable";
import { ITableProps } from "./../types/PaginationTable";

export default function Index(props: ITableProps) {
  return (
    <PaginationTableProvider>
      <PaginationTable {...props} />
    </PaginationTableProvider>
  );
}
