class Page < ActiveRecord::Base
  has_many :elements
  belongs_to :project
  attr_accessible :name
end
