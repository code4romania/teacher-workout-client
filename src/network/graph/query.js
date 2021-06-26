import { from, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

export const query = client => payload => of({})
  .pipe(mergeMap(() => from(client.query(payload))))
