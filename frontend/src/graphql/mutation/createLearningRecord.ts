import { gql } from "@apollo/client";

export default gql`
  mutation createLearningRecord($params: LearningRecordAttributes!){
    createLearningRecord(input: { params: $params } ){
      learningRecord {
       id
       startAt
       endingAt
       learningGoalId
      }
    }
  }
`;
