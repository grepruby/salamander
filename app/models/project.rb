class Project < ActiveRecord::Base
  belongs_to :user
  attr_accessible :name

  delegate :username, to: :user

end
