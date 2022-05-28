import React from 'react'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'
import { Layout } from 'lessons/more/layout'

const useStyles = makeStyles(() => ({ button: { color: 'white' } }))

export const More = () => <Layout>
  <Material.Button variant={'contained'} color={'primary'} className={useStyles().button}>
    Incarca mai multe
  </Material.Button>
</Layout>
