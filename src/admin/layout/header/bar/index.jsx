import React from 'react'
import { Icon } from 'admin/layout/header/icon'
import { Search } from 'admin/layout/header/bar/search'
import { Avatar } from 'admin/layout/header/bar/avatar'
import { Wrapper } from 'admin/layout/header/bar/wrapper'
import { Notifications } from 'admin/layout/header/bar/notifications'

export const Bar = () => <Wrapper>
  <Icon />
  <Search />
  <Notifications />
  <Avatar />
</Wrapper>
