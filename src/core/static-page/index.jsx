import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import Container from '@material-ui/core/Container'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    '& a': { '&:link, &:hover, &:visited, &:active': { color: '#ec203a', textDecoration: 'none' } },
    '& h1': { marginBottom: '71px' },
    '& h3': { marginBottom: '20px' },
    '& p': { marginBottom: '30px' },
    '& p + ul': { marginBottom: '20px' },
    '& ul + p': { marginTop: '26px' },
    '& li': { marginBottom: '18px' },
    '& ul': { listStyle: 'none' },
    '& ul li': {
      '&::before': {
        content: '\'\\2022\'',
        color: '#E5E7EB',
        fontWeight: 'bold',
        display: 'inline-block',
        width: '1em',
        marginLeft: '-1em',
      },
    },
  },
})

export const StaticPage = props => (
  <div>
    <Container maxWidth={'md'} className={useStyles().container}>
      <h1 align={'center'}>{props.title}</h1>
      {props.articles.map(article => parse(article.title + article.message))}
    </Container>
  </div>
)

StaticPage.propTypes = { title: PropTypes.node.isRequired, articles: PropTypes.array.isRequired }
