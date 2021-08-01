import React from 'react'
import { About } from 'layout/common/about'
import { Donate } from 'layout/common/donate'
import { Space } from 'layout/footer/buttons/space'
import { Terms } from 'layout/footer/buttons/terms'
import { Wrapper } from 'layout/footer/buttons/wrapper'
import { Privacy } from 'layout/footer/buttons/privacy'

export const Buttons = () => <Wrapper>
  <Terms />
  <Privacy />
  <About />
  <Space />
  <Donate />
</Wrapper>
