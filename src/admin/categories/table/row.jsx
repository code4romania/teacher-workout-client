import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { Name } from 'admin/categories/table/columns/name'
import { Count } from 'admin/categories/table/columns/count'
import { Action } from 'admin/categories/table/columns/action'

export const Row = ({ item }) => <Material.TableRow>
  <Name item={item} />
  <Count item={item} />
  <Action />
</Material.TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }
