import React, { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { getCollections } from "../../Redux/Actions/gather";
import Page from "../Page";
import ListResults from "./ListResults";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const ListCollections = (props) => {
  const classes = useStyles();
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await props.getCollections();
      setCollections(props.collections_reducer.data);
    };
    fetchData();
  }, [collections, props]);
  return (
    <Page className={classes.root} title="List Collections">
      <Container>
        <Box>
          <ListResults collections={collections} />
        </Box>
      </Container>
    </Page>
  );
};
const mapStateToProps = (state) => {
  return {
    collections_reducer: state.GatherReducer.collections,
  };
};
const mapDispatchToProps = {
  getCollections,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCollections);
