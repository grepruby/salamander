class AddUserIdToPages < ActiveRecord::Migration
  def change
    add_column :pages, :user_id, :integer
    Project.all.each do |project|
      Page.where(:project_id => project.id).each do |page|
        page.update_attributes(:user_id => User.find(project.user_id).id)
      end
    end
  end
end
