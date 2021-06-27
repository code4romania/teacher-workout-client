import React from 'react'

import { Text } from 'home/feature-option/text'
import { Icon } from 'home/feature-option/icon'

export const Option = props => (
  <>
    <Icon {...props} />
    <Text {...props} />
  </>
)
