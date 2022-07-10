import { gql } from "@apollo/client";

export default gql`
  mutation deleteUser($id: ID!){
    deleteUser(input: { id: $id }){
      id
    }
  }
`;
