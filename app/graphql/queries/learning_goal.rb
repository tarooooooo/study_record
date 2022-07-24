module Queries
  class LearningGoal < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::LearningGoal, null: false

    def resolve(id:)
      ::LearningGoal.find(id)
    end
  end
end
