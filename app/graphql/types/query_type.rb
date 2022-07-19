module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, resolver: Queries::Users
    field :user, resolver: Queries::User
    field :learning_goals, resolver: Queries::LearningGoals
    field :learning_goal, resolver: Queries::LearningGoal
    field :learning_record, resolver: Queries::LearningRecord
  end
end
