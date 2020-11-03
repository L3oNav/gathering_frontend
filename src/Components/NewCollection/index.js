import React, { useState } from "react";
import { connect } from "react-redux";
import { Mocks } from "../../const";
import {
  Box,
  Button,
  Grid,
  Container,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import Page from "../Page";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  materials: {
    padding: theme.spacing(2),
  },
  gridItem: {
    marginLeft: theme.spacing(3),
    height: "auto",
  },
  inputField: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  centerButton: {
    textAlign: "center",
  },
  addTier: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const NewCollection = () => {
  const classes = useStyles();
  const [materials] = useState(Mocks.gather);

  console.log(materials);
  return (
    <Page className={classes.root} title="New Collection">
      <Box display="flex" flexDirection="column" height="100%">
        <Container fullWidth>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              policy: false,
            }}
            validationSchema={Yup.object().shape({
              timeGatheried: Yup.number()
                .lessThan(256)
                .moreThan(1)
                .positive()
                .required("time gatheried is required"),
            })}
            onSubmit={() => {}}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h4">
                    Add New Collection
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.timeGatheried && errors.timeGatheried)}
                  fullWidth
                  helperText={touched.timeGatheried && errors.timeGatheried}
                  label="Time Gatheried"
                  margin="normal"
                  type="number"
                  name="timeGatheried"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.timeGatheried}
                  variant="outlined"
                />
                {materials
                  .slice(0)
                  .reverse()
                  .map((item) => (
                    <Grid
                      className={classes.materials}
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography spacing={3}>{item.tier}</Typography>
                      <Grid xs className={classes.gridItem} xl={12}>
                        <Typography>Material</Typography>
                        {item.material.map((mat) => (
                          <TextField
                            label={mat.enchant}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                          />
                        ))}
                      </Grid>
                      <Grid xs className={classes.gridItem} xl={12}>
                        <Typography>Prices</Typography>
                        {item.prices.map((price) => (
                          <TextField
                            label={price.enchant}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                          />
                        ))}
                      </Grid>
                    </Grid>
                  ))}
                <Box my={2}>
                  <Button
                    disabled={isSubmitting}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

//const mapStateToProps = state => {
//  return {
//    gather: GatherReducer
// }
//}

export default connect()(NewCollection);
