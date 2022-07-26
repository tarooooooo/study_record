class CreateLearningRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :learning_records do |t|
      t.references :learning_goal, null: false, foreign_key: true
      t.datetime :start_at, null: false, precision: 6
      t.datetime :ending_at, precision: 6

      t.timestamps
    end
  end
end
