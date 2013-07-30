class ChangeDataType < ActiveRecord::Migration
  def up
  	change_column :properties, :value, :text
  end

  def down
  	change_column :properties, :value, :string
  end
end
