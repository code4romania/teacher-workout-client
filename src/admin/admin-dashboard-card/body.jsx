import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes, { string } from "prop-types";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 2,
    color: "#6B7280",
    textDecoration: "none",
  },
  statistics: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    color: "#111827",
    textDecoration: "none",
  },
}));

export const AdminDashboardCardBody = ({ title, statistics }) => (
  <Grid container item xs={3} direction="column">
    <Typography component="h3" className={useStyles().title}>
      {title}
    </Typography>
    <Typography
      variant="body1"
      component="p"
      className={useStyles().statistics}
    >
      {statistics}
    </Typography>
  </Grid>
);

AdminDashboardCardBody.PropTypes = {
  title: string.isRequired,
  statistics: string.isRequired,
};
