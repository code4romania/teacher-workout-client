import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap } from 'rxjs/operators'

const METHOD = 'POST'

export const post = () => payload => of({})
  .pipe(mergeMap(() => ajax({ ...payload, method: METHOD })))
