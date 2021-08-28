import React from "react";
import { Grid } from "@material-ui/core";
import { Share } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import PropTypes, { string } from "prop-types";
import { Icons } from "admin/admin-dashboard-card/icons/icons";

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: "#6366F1",
    borderRadius: "6px",
    padding: "12.5%",
  },
  icon: {
    height: "18",
  },
}));

export const AdminDashboardCardIcon = ({ icon }) => {
  return (
    <Grid container xs={1} justify={"center"} alignItems={"center"}>
      <div className={useStyles().iconWrapper}>
        <img src={Icons[icon]} alt="card icon" className={useStyles().icon} />
      </div>
    </Grid>
  );
};

AdminDashboardCardIcon.PropTypes = {
  icon: string,
};
