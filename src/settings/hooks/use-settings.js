import { useSelector } from 'react-redux'

export const useSettings = () => useSelector(state => state.settings.value)
