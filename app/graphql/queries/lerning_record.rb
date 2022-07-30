module Queries
  class LearningRecord < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::LearningRecord, null: false

    def resolve(id:)
      ::LearningRecord.find(id)
    end
  end
end
