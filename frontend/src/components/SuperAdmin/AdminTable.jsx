import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  CircularProgress,
  Typography,
  Switch,
} from "@material-ui/core";

import { StyledTableCell, StyledTableRow } from "../../assets/theme/theme";

import styles from "./AdminTable.module.scss"

const AdminTable = ({ adminList }) => {

    const setEnable = (e) => {
        //UPDATE api to enable admin
    }

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Activate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminList ? (
            adminList.map((admin) => (
              <StyledTableRow key={admin.id}>
                <StyledTableCell align="left">{admin.name}</StyledTableCell>
                <StyledTableCell align="left">{admin.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {admin.isActive ? (
                    <span className={styles.enabled}>Enabled</span>
                  ) : (
                    <span className={styles.disabled}>Disabled</span>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Switch color="primary" checked={admin.isActive} id="isActive" onChange={setEnable(admin.id)} />
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={12} align="center">
                <CircularProgress color="primary" size={30} />
                <Typography>Loading current administrators ...</Typography>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default AdminTable;
