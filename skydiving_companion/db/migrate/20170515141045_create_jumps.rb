class CreateJumps < ActiveRecord::Migration[5.0]
  def change
    create_table :jumps do |t|
      t.integer :number
      t.string :location
      t.datetime :date
      t.integer :altitude
      t.string :gear
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
