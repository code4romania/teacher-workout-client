import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { Role } from 'admin/users/table/columns/role'
import { Phone } from 'admin/users/table/columns/phone'
import { Email } from 'admin/users/table/columns/email'
import { Action } from 'admin/users/table/columns/action'
import { FullName } from 'admin/users/table/columns/full-name'

export const Row = ({ item }) => <Material.TableRow>
  <FullName item={item} />
  <Phone item={item} />
  <Email item={item} />
  <Role item={item} />
  <Action item={item} />
</Material.TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }
