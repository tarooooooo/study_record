class LearningRecord < ApplicationRecord
  belongs_to :learning_goal
  validates :start_at, presence: true
end
