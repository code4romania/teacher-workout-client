import {map} from 'rxjs/operators'

import {query} from 'network/graph/query'
import {themes} from 'theme/repository/queries/themes'

export const get = () => query({query: themes})
    .pipe(map(({data: {themes}}) => themes))
