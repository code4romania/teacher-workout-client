import { Grid, List as MaterialList } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Card } from 'course/content/card'

export const List = ({ courses }) => <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
  <MaterialList>
    {courses.map(course => <Card key={course.title} course={course} />)}
  </MaterialList>
</Grid>

List.propTypes = { courses: PropTypes.array.isRequired }
