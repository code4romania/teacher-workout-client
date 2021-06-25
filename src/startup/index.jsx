import React from 'react'
import { Provider } from 'react-redux'

import { Settings } from 'settings'
import * as store from 'startup/store'

export const Startup = () => <Provider store={store.make()}>
  <Settings>
    Making even more progress...
  </Settings>
</Provider>
