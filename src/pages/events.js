import * as React from "react";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Events = () => {
  return (
    <Layout pageTitle="Events">
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            Tuesday Night - Intercession Prayer
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">7:30 pm</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Events;
