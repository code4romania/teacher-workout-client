import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { Name } from 'admin/lessons/table/columns/name'
import { Status } from 'admin/lessons/table/columns/status'
import { Actions } from 'admin/lessons/table/columns/actions'
import { Category } from 'admin/lessons/table/columns/category'

export const Row = ({ item }) => <Material.TableRow>
  <Name item={item} />
  <Category item={item} />
  <Status item={item} />
  <Actions />
</Material.TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }
