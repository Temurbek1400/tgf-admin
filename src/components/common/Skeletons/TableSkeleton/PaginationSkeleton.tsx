import { Grid, Skeleton } from "@mui/material";
import { StyledPaginationGrid } from "./TableSkeleton.style";

const PaginationSkeleton = ({ ...props }) => {
  return (
    <StyledPaginationGrid
      display="flex"
      justifyContent="right"
      container
      spacing={2}
      {...props}
    >
      <Grid item xs={1}>
        <Skeleton variant="text" />
      </Grid>
      <Grid item xs={1}>
        <Skeleton variant="text" />
      </Grid>
      <Grid item xs={1}>
        <Skeleton variant="text" />
      </Grid>
    </StyledPaginationGrid>
  );
};

export default PaginationSkeleton;
