import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const ToolBar = ({}) => {
  const classes = useStyles();
  return <div className={classes.base}></div>;
};

export default ToolBar;
