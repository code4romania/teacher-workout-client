import Container from '@material-ui/core/Container'
import parse from 'html-react-parser'
import React from 'react'
import 'core/staticpage/staticpage.css'
import PropTypes from 'prop-types'

export const StaticPage = props => (
  <div>
    <Container maxWidth={'md'}>
      <h1 align={'center'}>{props.title}</h1>
      { props.articles.map(article => parse(article.title + article.message)) }
    </Container>
  </div>
)

StaticPage.propTypes = { title: PropTypes.node.isRequired, articles: PropTypes.array.isRequired }
