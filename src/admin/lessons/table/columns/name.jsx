import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { Icon } from 'admin/lessons/table/columns/icon'

export const Name = ({ item }) => <Material.TableCell>
  <Material.Box display={'flex'} alignItems={'center'}>
    <Icon />
    {item.name}
  </Material.Box>
</Material.TableCell>

Name.propTypes = { item: PropTypes.object.isRequired }
