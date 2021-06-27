import { gql } from '@apollo/client'

export const lessons = gql`
{
  lessons {
    id
    title
    theme {
      id
      thumbnail {
        url
        description
      }
    }
    thumbnail {
      url
      description
    }
  }
}
`
