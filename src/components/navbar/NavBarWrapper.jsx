import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import NavBar from "./NavBar";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import NavBarWrapperStyles from "./styles/NavBarWrapperStyles";

const NavBarWrapper = ({ isMenuOpen, setIsMenuOpen }) => {
  const classes = NavBarWrapperStyles();

  const handleDrawerClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !isMenuOpen && classes.drawerPaperClose
        ),
      }}
      open={isMenuOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavBar />
      </List>
    </Drawer>
  );
};

export default NavBarWrapper;
