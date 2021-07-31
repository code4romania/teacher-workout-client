import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'lessons/lesson/card'
import * as Material from '@material-ui/core'
import { Context, useValue } from 'lessons/lesson/context'

export const Lesson = ({ value }) => <Context.Provider value={useValue({ value })}>
  <Material.Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Material.Box p={3}>
      <Card />
    </Material.Box>
  </Material.Grid>
</Context.Provider>

Lesson.propTypes = { value: PropTypes.object.isRequired }
