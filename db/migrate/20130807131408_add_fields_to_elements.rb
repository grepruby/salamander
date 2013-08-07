class AddFieldsToElements < ActiveRecord::Migration
  def change
  	add_column :elements, :header_js, :text
  	add_column :elements, :footer_js, :text
  	add_column :elements, :html, :text
  	add_column :elements, :content_box_html, :text
  	add_column :elements, :on_content_change, :text
  end
end
