import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = () => <Typography variant={'h5'} className={useStyles().root}>
  Cursuri zilnice de cateva minute
</Typography>
