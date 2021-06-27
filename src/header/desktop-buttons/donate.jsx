import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

import { actions } from "header/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.success.main,
    color: "white",
    "&:hover": { background: theme.palette.success.light },
  },
}));

export const Donate = () => (
  <Grid item md={3} lg={3} xl={3}>
    <Button className={useStyles().root}>{actions.donate}</Button>
  </Grid>
);
