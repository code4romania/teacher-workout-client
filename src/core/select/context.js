import { get } from 'lodash'
import React, { useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useValue = props => {
  const [value, setValue] = useState(get(props, 'options.[0].value', null))
  const handleChange = event => setValue(event.target.value)

  return ({ handleChange, options: props.options, value, setValue })
}
