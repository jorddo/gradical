import { gql } from 'apollo-server-micro';

const lists = gql`
  query LISTS_QUERY {
    lists {
      id
      creator_id
      complete
      title
      description
      created_at
      updated_at
    }
  }
`;

export default lists;
