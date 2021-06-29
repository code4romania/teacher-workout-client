import { useSelector } from 'react-redux'

export const useVisibility = () => useSelector(state => state.layout.header.mobile.visible)
