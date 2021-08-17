import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  makeStyles,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import { StyledTableCell, StyledTableRow } from "../../assets/theme/theme";

const WishListTable = ({ resultList }) => {
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">List owners's name</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultList ? (
            resultList.map((wishListResult) => (
              <StyledTableRow key={wishListResult.id}>
                <StyledTableCell align="left">
                  {wishListResult.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {wishListResult.location}
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={12} align="center">
                <Typography>Search results will appear here</Typography>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default WishListTable;
