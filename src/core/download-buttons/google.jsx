import React from 'react'
import { Image } from 'core/download-buttons/image'
import { Button } from 'core/download-buttons/button'
import Source from 'core/download-buttons/google.svg'

export const Google = () => <Button>
  <Image src={Source} />
</Button>
