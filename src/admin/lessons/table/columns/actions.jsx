import React from 'react'
import * as Material from '@mui/material'
import { Action } from 'admin/lessons/table/columns/action'

export const Actions = () => <Material.TableCell>
  <Action>Editează</Action>
  <Action>Duplică lecție</Action>
  <Action>Șterge</Action>
</Material.TableCell>
