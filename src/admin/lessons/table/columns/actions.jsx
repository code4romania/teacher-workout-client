import React from 'react'
import * as Material from '@material-ui/core'
import { Action } from 'admin/lessons/table/columns/action'

export const Actions = () => <Material.TableCell>
  <Action>Editează</Action>
  <Action>Duplică lecție</Action>
  <Action>Șterge</Action>
</Material.TableCell>
