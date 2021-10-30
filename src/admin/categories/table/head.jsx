import React from 'react'
import * as Material from '@mui/material'
import { Name } from 'admin/categories/table/headers/name'
import { Count } from 'admin/categories/table/headers/count'
import { Action } from 'admin/categories/table/headers/action'

export const Head = () => <Material.TableHead>
  <Material.TableRow>
    <Name />
    <Count />
    <Action />
  </Material.TableRow>
</Material.TableHead>
