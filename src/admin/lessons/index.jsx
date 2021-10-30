import React from 'react'
import { Layout } from 'admin/layout'
import { Title } from 'admin/lessons/title'
import { Table } from 'admin/lessons/table'
import { Filters } from 'admin/lessons/filters'

export const Lessons = () => <Layout>
  <Title />
  <Filters />
  <Table />
</Layout>
