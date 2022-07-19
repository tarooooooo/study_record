class LearningRecord < ApplicationRecord
  belongs_to :learning_goal
  validates :start_time, presence: true
end
