import { gql } from "@apollo/client";


export const GET_NEWS = gql`
  query{
    getNews
   {
    status
    totalResults
    articles {
      source {
        id
        name
      }
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
    }
  }
  }
`;