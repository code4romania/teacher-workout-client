import { map, tap } from 'rxjs/operators'
import { fetch } from 'settings/repositories/fetch'

let fetchedSettings = null

export const setup = () => fetch()
  .pipe(tap(response => { fetchedSettings = response }))
  .pipe(map(() => settings()))

export const settings = () => {
  if (!fetchedSettings) {
    throw new Error('It seems that settings were not fetched yet...')
  }

  return JSON.parse(JSON.stringify(fetchedSettings))
}
