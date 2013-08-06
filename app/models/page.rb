class Page < ActiveRecord::Base
  has_many :elements
  belongs_to :user
  attr_accessible :name, :user_id
end
