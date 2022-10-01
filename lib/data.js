import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/cl8q0zpd724j101uq8xina36l/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        title
        slug
        excerpt
        featuredImage {
          width
          height
          url
        }
        categories {
          name
          slug
        }
        author {
          bio
          name
          photo {
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}
