import { useEffect, useState } from 'react'

import { setup } from 'network/rest'

export const useRestSetup = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    setup() && setDone(true)
  }, [setDone])

  return done
}
