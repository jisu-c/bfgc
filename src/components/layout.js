import * as React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Layout = ({ pageTitle, children }) => {
  return (
    <Box>
      <Grid
        container
        padding={3}
        spacing={10}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <Grid item>
          <title>{pageTitle}</title>
        </Grid>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item>
          <main>{children}</main>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
