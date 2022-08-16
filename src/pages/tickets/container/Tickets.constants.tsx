import { Chip } from "@mui/material";
import { IColumn } from "components/common/PaginationTable/types/PaginationTable";
export const columns: IColumn[] = [
  {
    name: "Category",
    dataKey: "category",
  },
  {
    name: "Sector",
    dataKey: "sector",
  },
  {
    name: "Row",
    dataKey: "row",
  },
  {
    name: "Seat",
    dataKey: "seat",
  },
  {
    name: "Price",
    dataKey: "price",
  },
  {
    name: "Status",
    renderItem: (item) => {
      return (
        <div>
          <Chip
            label={item.occupied ? "Occupied" : "Free"}
            color={item.occupied ? "warning" : "success"}
          />
        </div>
      );
    },
  },
];
