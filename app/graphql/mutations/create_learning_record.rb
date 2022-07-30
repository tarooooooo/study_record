module Mutations
  class CreateLearningRecord < Mutations::BaseMutation
    argument :params, InputTypes::LearningRecord, required: true
    field :learning_record, ObjectTypes::LearningRecord, null: false
    def resolve(params:)
      learning_record = LearningRecord.create!(params.to_h)
      {learning_record: learning_record}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
