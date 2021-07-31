import React from 'react'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useValue = props => ({ lesson: props.value })
