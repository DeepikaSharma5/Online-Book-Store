import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  CircularProgress,
  Typography
} from "@material-ui/core";

import { StyledTableCell, StyledTableRow } from "../../assets/theme/theme";

const TopProductsTable = ({ productList }) => {
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
          <StyledTableCell align="center" width="90px">Rank</StyledTableCell>
            <StyledTableCell align="left">Code</StyledTableCell>
            <StyledTableCell align="left">Book Title</StyledTableCell>
            <StyledTableCell align="left">Publisher</StyledTableCell>
            <StyledTableCell align="left">Price (Rs.)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList ? (
            productList.map((product, index) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell align="center"><span style={{fontWeight:"bold"}}>{index + 1}</span></StyledTableCell>
                <StyledTableCell align="left">{product.id}</StyledTableCell>
                <StyledTableCell align="left">{product.title}</StyledTableCell>
                <StyledTableCell align="left">{product.publisher}</StyledTableCell>
                <StyledTableCell align="left">{product.price}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={12} align="center">
                <CircularProgress color="primary" size={30} />
                <Typography>Loading top products ...</Typography>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default TopProductsTable;
