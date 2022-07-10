import { gql } from "@apollo/client";

export default gql`
  mutation createUser($params: UserAttributes!){
    createUser(input: { params: $params } ){
      user {
       id
       email
      }
    }
  }
`;
