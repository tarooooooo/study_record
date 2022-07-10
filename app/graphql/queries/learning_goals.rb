module Queries
  class LearningGoals < Queries::BaseQuery
    # binding.pry

    type [ObjectTypes::LearningGoal], null: false

    def resolve(**args)
      ::LearningGoal.all
    end
  end
end
