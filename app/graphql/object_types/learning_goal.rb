# frozen_string_literal: true

module ObjectTypes
  class LearningGoal < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :body, String
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :user, ObjectTypes::User, null: false
    field :learning_records, [ObjectTypes::LearningRecord], null: false
  end
end
