/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TableRow,
  Table,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import get from "lodash.get";
import { PaginationTableContext } from "../context";
import { DEFAULT_ROW_LIMIT } from "../constants/PaginationTable.constants";
import TableSkeleton from "../../Skeletons/TableSkeleton/TableSkeleton";
import PaginationSkeleton from "../../Skeletons/TableSkeleton/PaginationSkeleton";

import {
  StyledDetailPanelTableCell,
  StyledIndexTableCell,
  StyledPaper,
  StyledTableBodyRow,
  StyledTableContainer,
  StyledTablePagination,
  TableCellBodyStyle,
  TableCellHeaderStyle,
  TableHeadStyled,
} from "../style/PaginationTable.style";
import { REQUEST_STATUS } from "hooks/useRequest/useRequest.constants";
import useQueryParams from "hooks/useQueryParams/useQueryParams";
import { IColumn, ITableProps } from "../types/PaginationTable";
// icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import NavigateNext from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Checkbox from "@mui/material/Checkbox";

export default function PaginationTable({
  url,
  columns = [],
  renderItemProps,
  onRowClick,
  detailPanel,
  getTableData,
  onOpenSidebar,
  render = false,
  deleteAbleItems = true,
  ...props
}: ITableProps) {
  const [pageHasChanged, setPageHasChanged] = useState(false);
  const { search } = useLocation();
  const { getParam, setParam, getAllParams } = useQueryParams();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const addRemoveItem = (selectedId: string) => {
    const isIncludes = selectedItems.includes(selectedId);
    if (isIncludes) {
      setSelectedItems(selectedItems.filter((id) => id !== selectedId));
    } else if (!isIncludes) {
      setSelectedItems([...selectedItems, selectedId]);
    }
  };
  const selectRemoveAllItems = () => {
    if (selectedItems.length === get(contentStore, "res.data.total")) {
      setSelectedItems([]);
    } else if (selectedItems.length === 0) {
      setSelectedItems(
        get(contentStore, "res.data.data").map((item: any) => item._id)
      );
    } else if (selectedItems.length > 0) {
      setSelectedItems(
        get(contentStore, "res.data.data").map((item: any) => item._id)
      );
    }
  };

  const {
    state: { contentStore, deleteItems },
    actions: { getContent, deleteRequest },
  } = useContext(PaginationTableContext);

  const rowsPerPage = useMemo(
    () => parseInt(getParam("limit")) || DEFAULT_ROW_LIMIT,
    [search]
  );

  const currentPage = useMemo(() => parseInt(getParam("page")) || 0, [search]);
  const data = useMemo(
    () =>
      get(contentStore, "res.data.data") || get(contentStore, "res.data", []),
    [contentStore]
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setParam("page", newPage);
    setPageHasChanged(true);
  };

  const resetPage = () => {
    setParam("page", 0);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value);
    setParam("limit", newRowsPerPage);
  };

  const allQuery = () => {
    let str = "";
    Object.keys(getAllParams())?.forEach((key) => {
      if (key === "page") {
        str = str + `${key}=${++getAllParams()[key]}&`;
      } else {
        str = str + `${key}=${getAllParams()[key]}&`;
      }
    });
    return "?" + str;
  };

  useEffect(() => {
    renderTableData();
    if (deleteItems.status === REQUEST_STATUS.success) {
      setSelectedItems([]);
    }
  }, [search, deleteItems.status, render]);

  const renderTableData = () => {
    // const filterParams = getAllParams();
    // let page: number = +filterParams.page || 1;
    // let limit: number = +filterParams.limit || DEFAULT_ROW_LIMIT;
    getContent(url, allQuery());
    // if (!pageHasChanged) resetPage();
    // else setPageHasChanged(false);
  };

  getTableData = () => {
    return renderTableData;
  };

  const renderHeader = (columns: IColumn[]) => {
    return (
      <>
        <TableHeadStyled>
          <TableRow>
            <TableCellHeaderStyle colSpan={columns?.length + 1}>
              <div className="first-row">
                <div className="selected">
                  {selectedItems.length} items selected
                </div>
                <div className="actions">
                  <button
                    onClick={() =>
                      deleteAbleItems && deleteRequest(url, selectedItems)
                    }
                    disabled={selectedItems.length === 0}
                  >
                    <DeleteForeverIcon />
                  </button>
                  <button>
                    <EditIcon />
                  </button>
                  <button onClick={() => onOpenSidebar && onOpenSidebar(true)}>
                    <AddToPhotosIcon />
                  </button>
                </div>
              </div>
            </TableCellHeaderStyle>
          </TableRow>
          <TableRow>
            <TableCellHeaderStyle colSpan={columns?.length + 1}>
              <div className="search-row">
                <span>
                  <SearchIcon />
                </span>
                <input placeholder="Search Name, Date, Number..." />
              </div>
            </TableCellHeaderStyle>
          </TableRow>
          <TableRow>
            {detailPanel && <TableCell />}
            <TableCellHeaderStyle>
              <Checkbox
                onClick={selectRemoveAllItems}
                checked={
                  selectedItems.length === get(contentStore, "res.data.total")
                }
              />
            </TableCellHeaderStyle>
            {columns.map((column: IColumn, index) => (
              <TableCellHeaderStyle key={index}>
                {column.name}
              </TableCellHeaderStyle>
            ))}
          </TableRow>
        </TableHeadStyled>
      </>
    );
  };

  const renderItem = (row: any, column: IColumn) =>
    column.renderItem
      ? column.renderItem(row, renderItemProps, renderTableData)
      : get(row, `${column.dataKey}`);

  const renderBody = (store: any) => {
    const { status, error } = store;

    if (status === REQUEST_STATUS.failed) return get(error, "message");

    return (
      <TableBody>
        {data?.map((row: any, index: number) => (
          <DetailPaneWithTableBody
            detailPanel={detailPanel}
            index={index}
            onRowClick={onRowClick}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            columns={columns}
            row={row}
            isSelected={selectedItems.includes(row._id)}
            addRemoveItem={addRemoveItem}
          >
            {columns?.map((column: IColumn, index: number) => (
              <TableCellBodyStyle
                align={column.align || "left"}
                key={index}
                component="th"
                scope="row"
              >
                {renderItem(row, column)}
              </TableCellBodyStyle>
            ))}
          </DetailPaneWithTableBody>
        ))}
      </TableBody>
    );
  };

  const renderPagination = () => (
    <StyledTablePagination
      rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
      colSpan={columns.length + 1}
      count={get(contentStore, "res.data.totalCount", 0)}
      rowsPerPage={rowsPerPage}
      page={currentPage}
      component="div"
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  return (
    <StyledPaper {...props}>
      <StyledTableContainer>
        {contentStore?.status === REQUEST_STATUS.loading ||
        deleteItems.status === REQUEST_STATUS.loading ? (
          <TableSkeleton tableBodyRowCount={10} columns={columns} />
        ) : (
          <Table stickyHeader aria-label="custom pagination table">
            {renderHeader(columns)}
            {renderBody(contentStore)}
          </Table>
        )}
      </StyledTableContainer>
      {contentStore?.status === REQUEST_STATUS.loading ||
      deleteItems.status === REQUEST_STATUS.loading ? (
        <PaginationSkeleton />
      ) : (
        renderPagination()
      )}
    </StyledPaper>
  );
}

const DetailPaneWithTableBody = ({ children, ...props }: any) => {
  const [isShowDetailPanel, setIsShowDetailPanel] = useState(false);
  const {
    index,
    onRowClick,
    detailPanel,
    currentPage,
    rowsPerPage,
    columns,
    row,
    isSelected,
    addRemoveItem,
  } = props;
  return (
    <>
      <StyledTableBodyRow
        key={index + 1}
        isRowClick={!!onRowClick}
        onClick={() => {
          return onRowClick && onRowClick(row);
        }}
      >
        {detailPanel && (
          <StyledIndexTableCell>
            <IconButton onClick={() => setIsShowDetailPanel((prev) => !prev)}>
              <NavigateNext
                sx={{
                  transform: `rotate(${isShowDetailPanel ? "90deg" : "0deg"})`,
                  transition: ".3s",
                }}
              />
            </IconButton>
          </StyledIndexTableCell>
        )}
        <StyledIndexTableCell>
          <Checkbox
            checked={isSelected}
            onClick={(event) => {
              event.stopPropagation();
              addRemoveItem(props.row._id);
            }}
          />
        </StyledIndexTableCell>
        {children}
      </StyledTableBodyRow>
      {detailPanel && (
        <StyledTableBodyRow
          sx={{
            display: !isShowDetailPanel && "none",
            transition: ".3s",
          }}
          key={index * 11.9}
        >
          <StyledDetailPanelTableCell colSpan={columns.length + 2}>
            {detailPanel(row)}
          </StyledDetailPanelTableCell>
        </StyledTableBodyRow>
      )}
    </>
  );
};
