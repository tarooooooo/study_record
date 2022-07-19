module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :update_user, mutation: Mutations::UpdateUser
    field :delete_user, mutation: Mutations::DeleteUser
    field :create_learning_goal, mutation: Mutations::CreateLearningGoal
    field :delete_learning_goal, mutation: Mutations::DeleteLearningGoal
    field :create_learning_record, mutation: Mutations::CreateLearningRecord
  end
end
