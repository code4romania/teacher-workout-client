import { useEffect, useState } from 'react'

import { setup } from 'network/graph'

export const useGraphSetup = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    setup() && setDone(true)
  }, [setDone])

  return done
}
