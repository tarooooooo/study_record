import { gql } from "@apollo/client";

export default gql`
  query users {
    users {
      id
      email
    }
  }
`;
