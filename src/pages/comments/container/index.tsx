import Comments from "./Comments";
import CommentsProvider from "../context/CommentsProvider";

const index = () => {
  return (
    <CommentsProvider>
      <Comments />
    </CommentsProvider>
  );
};

export default index;
