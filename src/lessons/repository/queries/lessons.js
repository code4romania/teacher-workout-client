import { gql } from '@apollo/client'

export const lessons = gql`
    {
        lessons(themeId: 5) {
            items {
                id
                title
                description
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
    }
`
