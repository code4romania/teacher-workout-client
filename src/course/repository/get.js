import {of} from 'rxjs'
import {map} from 'rxjs/operators'

const list = [
    {title: 'first'},
    {title: 'second'},
    {title: 'third'}
]

export const get = () => of({})
    .pipe(map(() => list))
