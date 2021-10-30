import React from 'react'
import { Row } from 'admin/users/table/row'
import * as Material from '@mui/material'
import { useData } from 'admin/users/table/hooks/use-data'

export const Body = () => <Material.TableBody>
  {useData().map(item => <Row key={JSON.stringify(item)} item={item} />)}
</Material.TableBody>
