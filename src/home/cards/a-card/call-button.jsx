import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#FFFFFF",
    marginTop: theme.spacing(3),
    textTransform: "none",
  },
}));
export const CallButton = () => (
  <Button
    variant={"contained"}
    color={"primary"}
    size={"small"}
    className={useStyles().button}
    endIcon={<ArrowForwardIcon />}
  >
    Call to action ptr creatori
  </Button>
);
