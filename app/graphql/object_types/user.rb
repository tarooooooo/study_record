# frozen_string_literal: true

module ObjectTypes
  class User < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :learning_goals, [ObjectTypes::LearningGoal], null: false
  end
end
