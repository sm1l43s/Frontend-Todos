import React, { useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import { NavLink } from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditUsersDataContainer from "./EditUsersDataContainer";
import { makeStyles } from "@material-ui/core/styles";

function createData(ordinal, user, roles) {
  return { ordinal, user, roles };
}

let useStyles = makeStyles((theme) => ({
  smallIcon: {
    fontSize: 16,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const UsersTable = ({ users, setEditUser }) => {
  const classes = useStyles();

  let rows = [];

  for (let i = 0; i < users.length; i++) {
    let roles = users[i].roles[0].name;

    if (users[i].roles.length > 1) {
      roles = users[i].roles[0].name + ", " + users[i].roles[1].name;
    }
    let item = createData(i + 1, users[i], roles.toLowerCase());
    rows = [...rows, item];
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    setEditUser(event.currentTarget.value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <EditUsersDataContainer open={open} handleClose={handleClose} />
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Lastname</StyledTableCell>
            <StyledTableCell align="right">Firstname</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Roles</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ordinal}>
              <StyledTableCell component="th" scope="row">
                {row.ordinal}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.user.lastName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.user.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.user.email}</StyledTableCell>
              <StyledTableCell align="right">{row.user.status}</StyledTableCell>
              <StyledTableCell align="right">{row.roles}</StyledTableCell>
              <StyledTableCell align="center">
                <NavLink to={"/dashboard/profile/" + row.user.id}>
                  <InfoOutlinedIcon />
                </NavLink>
                <IconButton
                  aria-label="edit"
                  onClick={handleClickOpen}
                  value={row.user.id}
                >
                  <EditOutlinedIcon className={classes.smallIcon} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
