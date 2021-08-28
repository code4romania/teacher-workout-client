import React from "react";
import * as Material from '@material-ui/core'
import { Title } from "admin/dashboard/title";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: '#fff'
    }
}))

export const Dashboard = () => <Material.Grid className={useStyles().wrapper}>
    <Title/>
</Material.Grid>
