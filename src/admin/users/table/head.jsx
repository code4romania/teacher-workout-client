import React from 'react'
import * as Material from '@mui/material'
import { Role } from 'admin/users/table/headers/role'
import { Phone } from 'admin/users/table/headers/phone'
import { Email } from 'admin/users/table/headers/email'
import { Action } from 'admin/users/table/headers/action'
import { FullName } from 'admin/users/table/headers/full-name'

export const Head = () => <Material.TableHead>
  <Material.TableRow>
    <FullName />
    <Phone />
    <Email />
    <Role />
    <Action />
  </Material.TableRow>
</Material.TableHead>
