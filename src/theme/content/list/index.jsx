import {Box, Grid, List as MaterialList, makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types'

import { Card } from 'theme/content/card'

const useListStyle = makeStyles(() => ({
    root: {
        paddingLeft: '130px',
        paddingRight: '130px'
    }
}))

export const List = ({ themes }) => {
    const {root} = useListStyle()

    return <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <MaterialList className={root}>
            {themes.map(theme => <Card key={theme.title} theme={theme}/>)}
        </MaterialList>
    </Grid>
}

List.propTypes = { themes: PropTypes.array.isRequired }
