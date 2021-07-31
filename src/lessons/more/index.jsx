import React from 'react'
import { Layout } from 'lessons/more/layout'
import * as Material from '@material-ui/core'

const useStyles = Material.makeStyles(() => ({ button: { color: 'white' } }))

export const More = () => <Layout>
  <Material.Button variant={'contained'} color={'primary'} className={useStyles().button}>
    Incarca mai multe
  </Material.Button>
</Layout>
