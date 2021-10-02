import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const LinkButton = ({ href, color, children }) => {
  return (
    <Box>
      <IconButton
        variant="text"
        href={href}
        target="_blank"
        color={color}
        size="large"
      >
        {children}
      </IconButton>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box padding={3}>
      <Grid container>
        <Grid item>
          <LinkButton
            href="https://www.facebook.com/groups/122160211168428/"
            color="primary"
          >
            <FacebookIcon />
          </LinkButton>
        </Grid>
        <Grid item>
          <LinkButton
            href="https://www.instagram.com/bfgc_cam/"
            color="secondary"
          >
            <InstagramIcon />
          </LinkButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
