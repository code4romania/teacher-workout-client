import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'theme/content/title'
import { List } from 'theme/content/list'
import { useThemes } from 'theme/hooks/use-themes'

export const Content = () => <Grid container justify={'center'} alignContent={'center'}>
    <Title />
    <List themes={useThemes()} />
</Grid>
