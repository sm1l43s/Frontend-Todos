import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import HeaderStyles from "./styles/HeaderStyles";


const Header = ({ isMenuOpen, setIsMenuOpen }) => {

  const classes = HeaderStyles();

  const handleDrawerOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, isMenuOpen && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            isMenuOpen && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
