import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";

export const Spacing = ({ children }) => (
  <Box pt={10}>
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={11} md={10} lg={9} xl={9}>
        {children}
      </Grid>
    </Grid>
  </Box>
);

Spacing.propTypes = { children: PropTypes.node.isRequired };
