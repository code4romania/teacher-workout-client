import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Grid, TextField } from '@material-ui/core'

export const Field = ({ rows, id, label, halfWidth }) => <Grid item xs={12} md={halfWidth ? 6 : 12}>
  <FormControl fullWidth>
    <TextField id={id} multiline label={label} rows={rows} />
  </FormControl>
</Grid>

Field.propTypes = {
  rows: PropTypes.number,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  halfWidth: PropTypes.bool,
}
Field.defaultProps = { rows: null, halfWidth: false }
