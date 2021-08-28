import React from 'react'
import * as Material from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Title } from 'admin/dashboard/title'
import { Layout } from 'admin/layout'
import { CardsLayout } from 'admin/dashboard/cards-layout'

const useStyles = makeStyles({ wrapper: { paddingTop: '33px' } })

export const Dashboard = () => <Layout>
  <Material.Grid container className={useStyles().wrapper} direction={'column'} spacing={3}>
    <Material.Grid item>
      <Title />
    </Material.Grid>
    <CardsLayout />
  </Material.Grid>
</Layout>
