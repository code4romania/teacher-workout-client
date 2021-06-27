import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = () => <Typography variant={'h5'} className={useStyles().root}>
  Abilități socio-emoționale pentru profesori
</Typography>
