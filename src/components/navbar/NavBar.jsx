import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";
import NavBarStyles from "./styles/NavBarStyles";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const NavBar = (props) => {
  let classes = NavBarStyles();

  return (
    <div>
      <NavLink to="/dashboard/profile" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/users" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/reports" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/admin" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Admin panel" />
        </ListItem>
      </NavLink>
    </div>
  );
};

export default NavBar;

export const secondaryListItems = (props) => {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
};
