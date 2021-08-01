import React from 'react'
import { Image } from 'core/download-buttons/image'
import Source from 'core/download-buttons/apple.svg'
import { Button } from 'core/download-buttons/button'

export const Apple = () => <Button>
  <Image src={Source} />
</Button>
