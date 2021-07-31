import { of } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { repository } from 'lessons/repository'
import { actions } from 'lessons/slices/get'

export const get = actions$ => actions$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }) => repository.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))
