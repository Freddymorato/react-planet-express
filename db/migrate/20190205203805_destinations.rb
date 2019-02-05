class Destinations < ActiveRecord::Migration[5.2]

  def change
    create_table :destinations do |t|
      t.string :name
      t.string :img_url
      t.string :astronomical_body
      t.string :view_on_maps
      t.integer :radius
      t.string :description
      t.integer :likes

      t.timestamps
    end
  end
end
