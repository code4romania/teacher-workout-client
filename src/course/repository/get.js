import { map } from 'rxjs/operators'

import {graph} from 'network'
import {lessons} from 'course/repository/queries/lessons'

export const get = () => graph().query(lessons)
    .pipe(map(({data: {lessons}}) => lessons))
