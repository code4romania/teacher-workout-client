import React from 'react'
import * as Material from '@mui/material'

export const Action = ({ item }) => <Material.TableCell>
  <Material.Link href={`/admin/categories/edit/${item.id}`}>
    Edit...
  </Material.Link>
</Material.TableCell>
