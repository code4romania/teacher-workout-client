import React from 'react'
import * as Material from '@mui/material'
import { Row } from 'admin/lessons/table/row'
import { useData } from 'admin/lessons/table/hooks/use-data'

export const Body = () => <Material.TableBody>
  {useData().map((item, index) => <Row key={index} item={item} />)}
</Material.TableBody>
