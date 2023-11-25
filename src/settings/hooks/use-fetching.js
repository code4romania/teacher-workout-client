import { useEffect, useState } from 'react'
import { tap } from 'rxjs/operators'

import { setup } from 'settings/fetching'

const setupSettings = onFinish => setup().pipe(tap(settings => onFinish(settings)))

export const useFetching = () => {
  const [settings, setSettings] = useState(undefined)

  useEffect(() => {
    const subscription = setupSettings(setSettings).subscribe()

    // Return a cleanup function that will unsubscribe when the component unmounts
    return () => subscription.unsubscribe()
  }, [setSettings])

  return settings
}
