import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import cors from 'cors';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import { context } from './context';
import { resolvers } from './resolvers';
import typeDefs from './typeDefs';
import directiveResolvers from './directives/isAuth';

// const corsOptions = {
//   origin: process.env.ORIGIN_URL,
//   credentials: true,
// } as CorsOptions;

const graphqlEndpoint = 'graphql';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
});

const server = new ApolloServer({
  schema: applyMiddleware(schema),
  context,
  // cors: corsOptions,
  introspection: true,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
  debug: true,
});

server
  .listen()
  .then(({ url }) =>
    console.log(`🚀 Server ready at: ${url}${graphqlEndpoint}`)
  );
