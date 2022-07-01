import { gql } from 'apollo-server-micro';

export default gql`
  scalar DateTime
  scalar JSON

  directive @auth on FIELD | FIELD_DEFINITION | QUERY

  type Query

  type Mutation {
    testMutation: String
  }

  type BaseError {
    message: String!
    path: String!
  }
`;
