import express from 'express';
import cors from "cors"; 
import morgan from "morgan";
import dotenv from 'dotenv';


import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';  

import http from 'http';

// import {typeDefs} from "./schemas gql/schema.js";
// import { resolvers } from './schemas gql/resolves.js';

import { ApolloServerErrorCode } from '@apollo/server/errors';
import { typeDefs } from './schemas/schemaGql.js';
import { resolvers } from './resolvers/resolve.js';
import connectToMongo from './mongo/connectToMongo.js';
import { connectToRedis } from './configs/connectToRedis.js';

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors({}));
app.use(morgan('dev'));

const server = new ApolloServer({
  typeDefs,
  resolvers,

  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer })
  ],  
});

server.start().then(async () => {    
  await connectToMongo();
  await connectToRedis();
  app.use(
    '/graphql', 
    expressMiddleware(server)
  );

  httpServer.listen({ port: 4500 });
  console.log(`🚀 Server ready at : ${4500}`);
  
});


