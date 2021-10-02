import * as React from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Grid
        container
        padding={3}
        spacing={10}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">Who is CAM?</Typography>
          <Typography>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">What is our vision?</Typography>
          <Typography>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutPage;
