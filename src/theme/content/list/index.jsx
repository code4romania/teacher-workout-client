import { Grid, List as MaterialList } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Card } from 'theme/content/card'

export const List = ({ themes }) => <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
  <MaterialList>
    {themes.map(theme => <Card key={theme.title} theme={theme} />)}
  </MaterialList>
</Grid>

List.propTypes = { themes: PropTypes.array.isRequired }
