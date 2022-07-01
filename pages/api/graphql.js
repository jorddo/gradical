import { ApolloServer } from 'apollo-server-micro';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import { context } from './context';
import { resolvers } from './resolvers';
import typeDefs from './typeDefs';
import directiveResolvers from './directives/isAuth';

export const config = {
  api: {
    bodyParser: false,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
});

const server = new ApolloServer({
  schema: applyMiddleware(schema),
  context,
  introspection: true,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}
