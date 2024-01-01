export const typeDefs = `#graphql
type Source {
  id: String
  name: String
}

type Article {
  source: Source
  author: String
  title: String
  description: String
  url: String
  urlToImage: String
  publishedAt: String
  content: String
}
type Source {
  id: String
  name: String
  description: String 
  url: String
  category: String
  language: String
  country: String
}

type NewsResponse {
  status: String
  totalResults: Int
  articles: [Article]
}
type NewsSourcesResponse {
  status: String
  sources: [Source]
}

type Query {
  getNews: NewsResponse
  getNewsSources:NewsSourcesResponse
}

type User {
  first_name: String
  last_name: String
  email: String
  password: String
}

input RegisterInput {
  first_name: String
  last_name: String
  email: String
  password: String
}

type Mutation {
  register(input: RegisterInput): User 
}

`