import React from 'react'
import * as Material from '@material-ui/core'
import { useContext } from 'core/select/context'

const Option = Material.MenuItem

export const Control = () => <Material.Select fullWidth value={useContext().value} onChange={useContext().handleChange}>
  {
    useContext().options.map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>)
  }
</Material.Select>
