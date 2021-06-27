import React from "react";
import { Grid } from "@material-ui/core";

import Source from "home/hero/download-buttons/google-store.png";

export const Google = () => (
  <Grid item>
    <a href={"#"}>
      <img src={Source} alt={"Descarcă aplicația de pe Google Play"} />
    </a>
  </Grid>
);
