import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { actions } from 'settings/slices/settings'
import * as repository from 'settings/repositories/fetch'

const perform = () => repository.fetch()
  .pipe(map(actions.success))
  .pipe(catchError(error => of(actions.failure(error))))

export const fetch = action$ => action$
  .pipe(ofType(actions.attempt.type))
  .pipe(mergeMap(perform))
