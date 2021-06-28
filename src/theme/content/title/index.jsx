import { Box, Grid } from '@material-ui/core'

import { Main } from 'theme/content/title/main'
import { Secondary } from 'theme/content/title/secondary'

export const Title = () => <Box pr={40} pl={40}>
  <Grid container justify={'center'} alignItems={'center'} spacing={8}>
    <Main />
    <Secondary />
  </Grid>
</Box>
