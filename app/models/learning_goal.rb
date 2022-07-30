class LearningGoal < ApplicationRecord
  belongs_to :user
  has_many :learning_records
  validates :title, presence: true
end
