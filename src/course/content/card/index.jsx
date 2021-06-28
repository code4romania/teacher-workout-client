import React from 'react'
import { Card as MaterialCard, CardActionArea, CardMedia } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Content } from 'course/content/card/content'
import { useStyles } from 'course/content/card/hooks/use-styles'

export const Card = ({ course }) => <MaterialCard className={useStyles().root}>
  <CardActionArea>
    <CardMedia className={useStyles().media} image={course.thumbnail.url} title={course.thumbnail.description} />
    <Content theme={course.theme} title={course.title} />
  </CardActionArea>
</MaterialCard>

Card.propTypes = { course: PropTypes.object.isRequired }
