import { of } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { mergeMap } from 'rxjs/operators'

export const get = () => url => of({})
  .pipe(mergeMap(() => fromFetch(url)))
