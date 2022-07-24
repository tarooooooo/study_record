module Queries
  class LearningGoals < Queries::BaseQuery

    type [ObjectTypes::LearningGoal], null: false

    def resolve(**args)
      ::LearningGoal.all
    end
  end
end
