import { gql } from "@apollo/client";

export default gql`
  mutation createLearningGoal($params: LearningGoalAttributes!){
    createLearningGoal(input: { params: $params } ){
      learningGoal {
       id
       title
       body
      }
    }
  }
`;
