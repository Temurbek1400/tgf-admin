import PaginationTableContext from "./PaginationTableContext";
import { usePaginationTable } from "./usePaginationTable";

const PaginationTableProvider = ({ children }: any) => {
  const store = usePaginationTable();
  return (
    <PaginationTableContext.Provider value={store}>
      {children}
    </PaginationTableContext.Provider>
  );
};

export default PaginationTableProvider;
