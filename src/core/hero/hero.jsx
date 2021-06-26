import React from 'react'
import { Description } from './Description'
import { DownloadButtons } from './DownloadButtons'
import { Title } from './Title'

export const Hero = () => {
  return (
    <div>
      <Title />
      <Description />
      <DownloadButtons />  
    </div>
  )
}
