import React from 'react'
import { Wrapper } from 'layout/footer/wrapper'
import { Buttons } from 'layout/footer/buttons'
import { Download } from 'layout/footer/download'
import { Organizer } from 'layout/footer/organizer'
import { Copyright } from 'layout/footer/copyright'

export const Footer = () => <Wrapper>
  <Organizer />
  <Buttons />
  <Copyright />
  <Download />
</Wrapper>
