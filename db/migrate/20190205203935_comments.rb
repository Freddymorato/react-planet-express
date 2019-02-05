class Comments < ActiveRecord::Migration[5.2]

  def change
    create_table :comments do |t|
      t.text :content
      t.string :commenter
      t.integer :destination_id

      t.timestamps
    end
  end
end
