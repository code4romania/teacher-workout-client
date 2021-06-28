import { Grid, Typography } from '@material-ui/core'

import {useSecondaryStyles} from 'theme/content/title/hooks/use-secondary-styles'

export const Secondary = () => {
  const {root} = useSecondaryStyles()

  return <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
    <Typography className={root}>
      Aici ar fi un alt text care sa imputerniceasca ce zice textul de mai sus si sa complementeze headlineul de mai sus
      si sa introduca utilizaoturl in content .pwp.
    </Typography>
  </Grid>
}
