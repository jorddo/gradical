import { gql } from 'apollo-server-micro';

export default gql`
  extend type Query {
    lists: [List]
  }

  type List {
    id: ID!
    creator_id: String!
    title: String
    description: String
    complete: Boolean
    created_at: DateTime
    updated_at: DateTime
  }
`;
