import React from "react";
import * as Material from '@material-ui/core'
import { staticData } from "admin/dashboard/staticData"
import { Card } from "admin/dashboard/card";

export const CardsLayout = () => <>
<Material.Grid item container xs={12} spacing={2} direction="row">
    {staticData
    .filter((data, idx) => idx < 3)
    .map((data, idx) => 
        <Material.Grid item xs={12} md={4} key={idx}>
            <Card 
                icon={data.icon} 
                statistics={data.statistics} 
                title={data.title} 
                link={data.link} 
                linkText={data.linkText}
            />
        </Material.Grid>
    )}
</Material.Grid>
<Material.Grid item container xs={12} spacing={2} direction="row">
    {staticData
    .filter((data, idx) => idx >= 3)
    .map((data, idx) => 
        <Material.Grid item xs={12} md={6} key={idx}>
            <Card 
                icon={data.icon} 
                statistics={data.statistics} 
                title={data.title} 
                link={data.link} 
                linkText={data.linkText}
            />
        </Material.Grid>
    )}
</Material.Grid>
</>