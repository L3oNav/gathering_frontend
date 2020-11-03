import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const ListResults = ({ className, collections, ...rest }) => {
  const classes = useStyles();
  const [limit] = useState(10);
  const sumCollections = (gatheried) => {
    if (collections && gatheried) {
      var totalMaterials = 0;
      var estimatedPrice = 0;
      for (let i; i < gatheried.length; i++) {
        totalMaterials += gatheried[i].material;
        estimatedPrice += gatheried[i].prices.value;
      }
      return (
        <>
          <TableCell>{totalMaterials}</TableCell>
          <TableCell>{estimatedPrice}</TableCell>
        </>
      );
    }
  };
  return (
    <Card className={classes.root}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* TODO checkbox logic for intelige search in real time*/}
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>Time Gatheried</TableCell>
                <TableCell>Materials</TableCell>
                <TableCell>Estimated Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {collections
                ? collections.slice(0, limit).map((collection) => {
                    console.log(collection);
                    return (
                      <TableRow>
                        <TableCell>
                          <Checkbox value="True" />
                        </TableCell>
                        <TableCell>
                          <Typography>{collection.time_gatheried}</Typography>
                        </TableCell>
                        {sumCollections(collection.gatheried)}
                      </TableRow>
                    );
                  })
                : ""}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default ListResults;
