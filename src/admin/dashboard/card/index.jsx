import React from 'react'
import * as Material from '@mui/material'
import { Layout } from 'admin/dashboard/card/layout'
import { Content } from 'admin/dashboard/card/content'
import { Actions } from 'admin/dashboard/card/actions'
import { Context, useValue } from 'admin/dashboard/card/context'

export const Card = props => <Context.Provider value={useValue(props)}>
  <Layout>
    <Material.Card>
      <Content />
      <Actions />
    </Material.Card>
  </Layout>
</Context.Provider>
