import React from "react";
import { Grid } from "@material-ui/core";

import { Image } from "home/primary-features/image";
import { About } from "home/primary-features/about";
import { Layout } from "home/primary-features/layout";
import { Options } from "home/primary-features/options";

export const PrimaryFeatures = () => (
  <Layout>
    <Grid item container>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <About />
        <Options />
      </Grid>

      <Image />
    </Grid>
  </Layout>
);
