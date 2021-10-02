import * as React from "react";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Services = () => {
  return (
    <Layout pageTitle="Services">
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6">Sunday Service</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">2 pm</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
