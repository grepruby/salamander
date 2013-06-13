class Property < ActiveRecord::Base
  belongs_to :element
  attr_accessible :name, :value
end
