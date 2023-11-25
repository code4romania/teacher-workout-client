import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/material'

const makeTitleStyles = theme => ({
  '& h1': {
    fontSize: '52px',
    marginTop: '40px',
    marginBottom: '47px',

    [theme.breakpoints.up('md')]: {
      marginTop: '60px',
      marginBottom: '71px',
    },
  },
  '& h3': { marginBottom: '20px' },
})

const makeListsStyles = () => ({
  '& p + ul': { marginBottom: '20px' },
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
})

const makeParagraphStyles = () => ({
  '& p': { marginBottom: '30px' },
  '& ul + p': { marginTop: '26px' },
})

const makeAnchorStyles = () => ({
  '& a': {
    '&:link, &:hover, &:visited, &:active': {
      color: '#ec203a',
      textDecoration: 'none',
    },
  },
})

const useStyles = makeStyles(theme => ({
  container: {
    ...makeTitleStyles(theme),
    ...makeListsStyles(),
    ...makeParagraphStyles(),
    ...makeAnchorStyles(),
    fontFamily: theme.typography.fontFamily,
  },
}))

export const StaticPage = props => (
  <div>
    <Container maxWidth={'md'} className={useStyles().container}>
      <h1 align={'center'}>{props.title}</h1>
      {props.articles.map(article => parse(article.title + article.message))}
    </Container>
  </div>
)

StaticPage.propTypes = { title: PropTypes.node.isRequired, articles: PropTypes.array.isRequired }
