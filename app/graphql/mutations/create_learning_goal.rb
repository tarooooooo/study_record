module Mutations
  class CreateLearningGoal < Mutations::BaseMutation
    argument :params, InputTypes::LearningGoal, required: true

    field :learning_goal, ObjectTypes::LearningGoal, null: false
    def resolve(params:)
      puts params
      learning_goal = LearningGoal.create!(params.to_h)
      {learning_goal: learning_goal}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
