class CreateLearningGoalTags < ActiveRecord::Migration[6.1]
  def change
    create_table :learning_goal_tags do |t|
      t.references :tag, null: false, foreign_key: true
      t.references :learning_goal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
