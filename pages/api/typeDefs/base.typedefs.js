import { gql } from 'apollo-server';

export default gql`
  scalar DateTime
  scalar JSON

  directive @auth on FIELD | FIELD_DEFINITION | QUERY

  type Query {
    testQuery: String
  }

  type Mutation {
    testMutation: String
  }

  type BaseError {
    message: String!
    path: String!
  }
`;
