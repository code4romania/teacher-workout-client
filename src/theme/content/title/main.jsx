import {Grid, Typography} from '@material-ui/core'

import {useMainStyles} from 'theme/content/title/hooks/use-main-styles'

export const Main = () => {
    const {root} = useMainStyles()

    return <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={root}>
            Cursuri zilnice de doar câteva minute pentru a te pregăti temeinic
        </Typography>
    </Grid>
}
