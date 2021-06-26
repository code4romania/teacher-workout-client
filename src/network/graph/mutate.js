import { from, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

export const mutate = client => payload => of({})
  .pipe(mergeMap(() => from(client.mutate(payload))))
