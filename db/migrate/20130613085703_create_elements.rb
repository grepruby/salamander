class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.string :name
      t.references :page

      t.timestamps
    end
    add_index :elements, :page_id
  end
end
