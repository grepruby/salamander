class Element < ActiveRecord::Base
  has_many :properties, :dependent => :destroy
  belongs_to :page
  attr_accessible :name
end
