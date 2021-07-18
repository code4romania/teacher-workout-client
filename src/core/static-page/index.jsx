import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Container from '@material-ui/core/Container'

import 'core/static-page/index.css'

export const StaticPage = props => (
  <div>
    <Container maxWidth={'md'}>
      <h1 align={'center'}>{props.title}</h1>
      { props.articles.map(article => parse(article.title + article.message)) }
    </Container>
  </div>
)

StaticPage.propTypes = { title: PropTypes.node.isRequired, articles: PropTypes.array.isRequired }
