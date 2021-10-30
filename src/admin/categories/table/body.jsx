import React from 'react'
import * as Material from '@mui/material'
import { Row } from 'admin/categories/table/row'
import { useData } from 'admin/categories/table/hooks/use-data'

export const Body = () => <Material.TableBody>
  {useData().map(item => <Row key={JSON.stringify(item)} item={item} />)}
</Material.TableBody>
