class CreateSkydives < ActiveRecord::Migration[5.0]
  def change
    create_table :skydives do |t|
      t.integer :jump_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
