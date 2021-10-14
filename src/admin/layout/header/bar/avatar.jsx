import React from 'react'
import * as Material from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import dummyAvatar from 'admin/layout/header/bar/avatar-dummy.jpg'

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '100%',
    overflow: 'hidden',
    marginLeft: theme.spacing(2),
  },
  img: {
    width: '100%',
    height: '100%',
  },
}))

export const Avatar = () => <Material.Hidden smDown>
  <Material.Grid item>
    <div className={useStyles().avatar}>
      <img src={dummyAvatar} className={useStyles().img} />
    </div>
  </Material.Grid>
</Material.Hidden>
