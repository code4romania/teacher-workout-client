import React from "react";
import { Grid } from "@material-ui/core";
import { Body } from "a-card/body";
import { CallButton } from "a-card/call-button";
import { Title } from "a-card/title";

export const Content = () => (
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
    <Title />
    <Body />
    <CallButton />
  </Grid>
);
