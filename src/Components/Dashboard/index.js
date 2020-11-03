import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../Page";
import Budget from "../Budget";
import TotalProfit from "../TotalProfit";
import SilverPerMaterial from "../SilverPerMaterial";
import GatheringByTier from "../GatheringByTier";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <SilverPerMaterial />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <GatheringByTier />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
