import { from } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { mergeMap, map } from 'rxjs/operators'

const URL = '/settings.json'

export const fetch = () => fromFetch(URL)
  .pipe(map(response => response.json()))
  .pipe(mergeMap(from))
