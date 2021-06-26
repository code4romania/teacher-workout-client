import React from 'react'
import { Description } from 'core/hero/description'
import { DownloadButtons } from 'core/hero/download-buttons'
import { Title } from 'core/hero/title'

export const Hero = () => (
  <div>
    <Title />
    <Description />
    <DownloadButtons />
  </div>
)
