module InputTypes
  class LearningRecord < Types::BaseInputObject
    graphql_name 'LearningRecordAttributes'

    argument :start_at, GraphQL::Types::ISO8601DateTime, required: true
    argument :ending_at, GraphQL::Types::ISO8601DateTime
    argument :learning_goal_id, Integer, required: true
  end
end
