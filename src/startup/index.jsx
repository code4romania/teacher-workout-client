import React from 'react'
import { Provider } from 'react-redux'

import * as store from 'startup/store'

export const Startup = () => <Provider store={store.make()}>
  Making progress...
</Provider>
