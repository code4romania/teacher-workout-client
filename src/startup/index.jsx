import React from 'react'
import { Provider } from 'react-redux'

import { Network } from 'network'
import { Settings } from 'settings'
import * as store from 'startup/store'

export const Startup = () => <Settings>
  <Network>
    <Provider store={store.make()}>
      Making even more progress...
    </Provider>
  </Network>
</Settings>
