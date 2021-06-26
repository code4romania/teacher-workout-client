import {gql} from '@apollo/client'

export const themes = gql`
{
  themes {
    id
    title
    thumbnail {
      url
      description
    }
  }
}
`
