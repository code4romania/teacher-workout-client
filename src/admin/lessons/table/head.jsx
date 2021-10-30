import React from 'react'
import * as Material from '@material-ui/core'
import { Name } from 'admin/lessons/table/headers/name'
import { Status } from 'admin/lessons/table/headers/status'
import { Actions } from 'admin/lessons/table/headers/actions'
import { Category } from 'admin/lessons/table/headers/category'

export const Head = () => <Material.TableHead>
  <Material.TableRow>
    <Name />
    <Category />
    <Status />
    <Actions />
  </Material.TableRow>
</Material.TableHead>
