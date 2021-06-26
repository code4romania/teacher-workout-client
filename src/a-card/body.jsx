import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 1.5,
    color: "#6B7280",
    marginTop: theme.spacing(3),
  },
}));
export const Body = () => (
  <Typography className={useStyles().body} color={"textSecondary"} gutterBottom>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
    obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod
    quibusdam expedita nemo.
  </Typography>
);
