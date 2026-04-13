import { gql } from 'graphql-request';

export const GET_POSTS = gql`
{
  posts {
    nodes {
      id
      title
      excerpt
      slug
      date
      author {
        node {
          name
        }
      }


      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const GET_POST_BY_SLUG = gql`
query GetPost($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    content
    date
    author {
      node {
        name
      }
    }

  }
}
`;


export const GET_SITE_INFO = gql`
{
  generalSettings {
    title
    description
  }
}
`;