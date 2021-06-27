import React from "react";
import { Grid } from "@material-ui/core";

import Source from "home/hero/download-buttons/apple-store.png";

export const Apple = () => (
  <Grid item>
    <a href={"#"}>
      <img src={Source} alt={"Descarcă aplicația de pe App Store"} />
    </a>
  </Grid>
);
