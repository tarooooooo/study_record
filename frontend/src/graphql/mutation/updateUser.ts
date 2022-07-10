import { gql } from "@apollo/client";

export default gql`
  mutation updateUser($id: ID!, $params: UserAttributes!){
    updateUser(input: {id: $id, params: $params}){
      user {
        id
        email
      }
    }
  }
`;
