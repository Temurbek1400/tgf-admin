import { IColumn } from "components/common/PaginationTable/types/PaginationTable";
export const FORM_NAMES = {
  name: "name",
  number: "number",
  field: "field",
  brand: "brand",
  count: "count",
  position: "position",
};
export const tableColumns: IColumn[] = [
  {
    name: "Full Name",
    dataKey: "fullName",
  },
  {
    name: "Phone number",
    dataKey: "phoneNumber",
  },
  {
    name: "Brand",
    dataKey: "brand",
  },
  {
    name: "Employee count",
    dataKey: "employeeCount",
  },
];
