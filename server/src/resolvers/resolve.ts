import { Article } from '../types/article.js';
import { Source } from "../types/source.js";
import { fncGetNews, fncGetNewsSource } from "../dal/fetch.js";
import { User } from '../types/user.js';
import { userService } from '../services/userService.js';

export const resolvers = {
  Query: {
    getNews: async () => {
      const data = await fncGetNews()
      return {
        status: 'ok',
        totalResults: data.articles.length,
        articles: data.articles.map((article: Article) => ({
          source: { id: article.source.id, name: article.source.name },
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          content: article.content,
        })),
      };
    },

    getNewsSources: async () => {
      const data = await fncGetNewsSource()
      return {
        status: 'ok',
        sources: data.sources.map((source: Source) => ({
          id: source.id,
          name: source.name,
          description: source.description,
          url: source.url,
          category: source.category,
          language: source.language,
          country: source.country,
        })),
      };
    },
  },
  Mutation: {
    register: (parent: any, args: { input: User }) => {

      const newUser: User = {
        first_name: args.input.first_name,
        last_name: args.input.last_name,
        email: args.input.email,
        password: args.input.password
      };

      // Check if the user already exists

      // const userExistsQuery =
      // const existingUser = await sendQueryToDatabase(userExistsQuery, [newUser.email]);
      // if (existingUser.rows.length > 0) {
      //   throw new GraphQLError("User already exists", { extensions: { http: { status: 400 } } });
      // }
      userService.addUser(newUser);
      // pubsub.publish("USER_REGISTER", {
      //   messagePubSub: {
      //     message:
      //       // newUser,
      //       `name: ${newUser.first_name} added to us`

      //   }
      // });


      return newUser
    },
  }
}