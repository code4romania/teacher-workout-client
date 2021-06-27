import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.4em",
    lineHeight: 1.1,
    color: "#1F2937",
  },
}));
export const Title = () => (
  <Typography
    className={useStyles().title}
    color={"textSecondary"}
    gutterBottom
  >
    Vrei să contribui la acest app. Vino alături de noi în echipă
  </Typography>
);
