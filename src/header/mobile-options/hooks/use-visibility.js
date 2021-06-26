import { useSelector } from 'react-redux'

export const useVisibility = () => useSelector(state => state.header.mobile.visible)
