class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name
      t.references :element
      t.string :value

      t.timestamps
    end
    add_index :properties, :element_id
  end
end
