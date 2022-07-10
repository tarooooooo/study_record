module InputTypes
  class LearningGoal < Types::BaseInputObject
    argument :title, String, required: true
    argument :body, String, required: false
    argument :user_id, Integer, required: true
  end
end
