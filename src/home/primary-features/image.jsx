import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

import Source from "home/primary-features/device.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.only("md")]: { justifyContent: "center" },
    [theme.breakpoints.only("sm")]: { justifyContent: "center" },
    [theme.breakpoints.only("xs")]: { justifyContent: "center" },
  },
  image: { [theme.breakpoints.only("xs")]: { width: 200 } },
}));

export const Image = () => (
  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
    <Box pt={5} className={useStyles().root}>
      <img src={Source} alt={"device"} className={useStyles().image} />
    </Box>
  </Grid>
);
