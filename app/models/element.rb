class Element < ActiveRecord::Base
  has_many :properties
  belongs_to :page
  attr_accessible :name
end
