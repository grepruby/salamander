class AddUsernameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
  	User.all.each_with_index do |user, index|
  		user.update_attribute('username', user.name + index.to_s)
	end
	add_column :users, :location, :string
  end
end
