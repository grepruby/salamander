class Element < ActiveRecord::Base
  has_many :properties, :dependent => :destroy
  belongs_to :page
  attr_accessible :name, :header_js, :footer_js, :html, :content_box_html, :on_content_change, :properties_attributes
  accepts_nested_attributes_for :properties, :allow_destroy => :true
end
