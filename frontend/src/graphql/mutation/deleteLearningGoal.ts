import { gql } from "@apollo/client";

export default gql`
  mutation deleteLearningGoal($id: ID!){
    deleteLearningGoal(input: { id: $id }){
      id
    }
  }
`;
