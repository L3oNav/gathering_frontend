import TopBar from "../Layout/DashboardLayout/TopBar";
import NavBar from "../Layout/DashboardLayout/NavBar";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const LayoutDashboard = (props) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  if (!props.token.access) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.AuthReducer.login.token,
  };
};
export default connect(mapStateToProps)(LayoutDashboard);
