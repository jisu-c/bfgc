import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const LinkButton = ({ href, children }) => {
  return <Button href={href}>{children}</Button>;
};

const Nav = () => {
  return (
    <Box padding={3}>
      <Grid container spacing={4}>
        <Grid item>
          <LinkButton href="/">Home</LinkButton>
        </Grid>
        {/* <Grid item>
          <LinkButton href="/about">About</LinkButton>
        </Grid> */}
        <Grid item>
          <LinkButton href="/events">Events</LinkButton>
        </Grid>
        <Grid item>
          <LinkButton href="/services">Service</LinkButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
