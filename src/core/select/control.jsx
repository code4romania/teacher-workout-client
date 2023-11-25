import React from 'react'
import { makeStyles } from '@mui/styles'
import { Select, MenuItem as Option } from '@mui/material'
import { useContext } from 'core/select/context'

const useSelectStyles = makeStyles(() => ({ root: { backgroundColor: 'white' } }))

export const Control = () => {
  const { handleChange, options, value } = useContext()

  return (
    <Select fullWidth classes={useSelectStyles()} value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <Option key={`select-option-${index}-${option.value}`} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  )
}
