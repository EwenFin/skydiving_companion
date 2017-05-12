class CreateJumps < ActiveRecord::Migration[5.0]
  def change
    create_table :jumps do |t|
      t.integer :number
      t.datetime :date
      t.string :location
      t.integer :altitude
      t.string :gear
      t.text :description

      t.timestamps
    end
  end
end
