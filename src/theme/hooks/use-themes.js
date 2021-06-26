import {get} from 'lodash'
import {useSelector} from 'react-redux'

const selector = ({theme}) => get(theme, 'get.data', [])

export const useThemes = () => useSelector(selector)
