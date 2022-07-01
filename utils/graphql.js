import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_API);

export const request = async (query, variables) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    console.log(err);
  }
};
