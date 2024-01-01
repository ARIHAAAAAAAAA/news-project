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

export const GET_NEWS_SOURCE = gql`
  query{
    getNewsSources {
    sources {
      category
      country
      description
      language
      id
      name
      url
    }
    status
  }
}
`;

