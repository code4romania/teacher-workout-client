import React from 'react'

import { Configs } from 'startup/configs'
import { Providers } from 'startup/providers'
import { Router } from 'startup/router'

export const Startup = () => <Configs>
  <Providers>
    <Router />
  </Providers>
</Configs>
