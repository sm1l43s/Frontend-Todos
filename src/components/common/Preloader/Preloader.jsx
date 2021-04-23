import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PreloaderStyles from "./styles/PreloaderStyles";

const Preloader = (props) => {
  const classes = PreloaderStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
