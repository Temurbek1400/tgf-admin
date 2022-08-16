import { FC } from "react";
import useComments from "./useComments";
import CommentsContext from "./CommentsContext";

const CommentsProvider: FC = ({ children }) => {
  const value = useComments();
  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
