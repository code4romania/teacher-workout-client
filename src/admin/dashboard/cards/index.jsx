import React from 'react'
import { Row } from 'admin/dashboard/cards/row'
import { useFirstRow } from 'admin/dashboard/cards/hooks/use-first-row'
import { useSecondRow } from 'admin/dashboard/cards/hooks/use-second-row'

export const Cards = () => <>
  <Row cards={useFirstRow()} />
  <Row cards={useSecondRow()} />
</>
