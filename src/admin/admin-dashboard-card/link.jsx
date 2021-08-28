import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { string } from "prop-types";

const useStyles = makeStyles((theme) => ({
  link: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 2,
    color: "#4F46E5",
    textDecoration: "none",
    paddingLeft: "16",
  },
}));

export const AdminDashboardLink = ({ link, text }) => (
  <Grid container xs={1} justify={"center"} alignItems={"center"}>
    <Typography component="p" className={useStyles().link}>
      <Link to={link}>{text}</Link>
    </Typography>
  </Grid>
);

AdminDashboardLink.PropTypes = {
  link: string.isRequired,
  text: string.isRequired,
};
