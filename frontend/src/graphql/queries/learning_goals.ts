import { gql } from "@apollo/client";

export default gql`
  query learningGoals {
    learningGoals {
      id
      title
      body
    }
  }
`;
