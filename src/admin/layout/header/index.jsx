import React from 'react'
import { Bar } from 'admin/layout/header/bar'
import { Buttons } from 'admin/layout/header/buttons'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
})

export const Header = () => <div className={useStyles().root}>
  <Bar />
  <Buttons />
</div>
