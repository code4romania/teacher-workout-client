import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {actions} from 'theme/slices/get'

export const useInit = () => {
    const dispatch = useDispatch()
    const {attempt} = actions

    useEffect(() => {
       dispatch(attempt())
    }, [dispatch, attempt])
}
