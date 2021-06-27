import {Grid, makeStyles, GridList} from '@material-ui/core'
import PropTypes from 'prop-types'

import {Card} from 'theme/content/card'

const useListStyle = makeStyles(() => ({
    root: {
        paddingLeft: '130px',
        paddingRight: '130px'
    }
}))

export const List = ({themes}) => {
    const {root} = useListStyle()

    return <GridList className={root} cols={3} spacing={20} cellHeight={'auto'}>
        {themes.map(theme => <Card key={theme.title} theme={theme}/>)}
    </GridList>
}

List.propTypes = {themes: PropTypes.array.isRequired}
