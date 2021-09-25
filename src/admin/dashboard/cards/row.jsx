import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'admin/dashboard/card'
import * as Material from '@material-ui/core'

export const Row = ({ cards }) => <Material.Grid container spacing={2}>
  {
    cards.map((card, index) => <Card {...card} key={index} />)
  }
</Material.Grid>

Row.propTypes = { cards: PropTypes.array.isRequired }
