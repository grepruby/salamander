class Project < ActiveRecord::Base
  belongs_to :user
  attr_accessible :name

  delegate :username, to: :user
  has_many :pages, :dependent => :destroy

end
