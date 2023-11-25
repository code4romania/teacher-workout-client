import React from 'react'
import { createRoot } from 'react-dom/client'

import { Startup } from 'startup'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<React.StrictMode>
  <Startup />
</React.StrictMode>)
