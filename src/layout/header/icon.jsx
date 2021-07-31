import React from 'react'
import { makeStyles } from '@material-ui/core'

import Source from 'layout/header/icon.png'
import { routesPath } from 'startup/routes'

const useStyles = makeStyles({ root: { height: 50 } })

export const Icon = () => <a href={routesPath.Home}><img src={Source} className={useStyles().root} /></a>
