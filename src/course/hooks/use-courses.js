import { get } from 'lodash'
import { useSelector } from 'react-redux'

const selector = ({ course }) => get(course, 'get.data', [])

export const useCourses = () => useSelector(selector)
