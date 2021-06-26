import { map } from 'rxjs/operators'

import { graph } from 'network'
import { themes } from 'theme/repository/queries/themes'

export const get = () => graph().query({ query: themes })
  .pipe(map(({ data: { themes } }) => themes))
