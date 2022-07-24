class CreateLearningGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :learning_goals do |t|
      t.string :title, null: false
      t.text :body
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
