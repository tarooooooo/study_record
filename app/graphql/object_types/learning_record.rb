# frozen_string_literal: true

module ObjectTypes
  class LearningRecord < Types::BaseObject
    field :id, ID, null: false
    field :learning_goal_id, Integer, null: false
    field :start_at, GraphQL::Types::ISO8601DateTime, null: false
    field :ending_at, GraphQL::Types::ISO8601DateTime
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :learning_goal, [ObjectTypes::LearningGoal], null: false
  end
end
