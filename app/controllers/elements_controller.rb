class ElementsController < ApplicationController
  before_filter :authenticate_user! 
  layout false

  def create_element
    project = current_user.projects.find(params[:project_id])
    page = project.pages.find(params[:page_id])
    @element = page.elements.new(:name => params[:type])
    if @element.save!
      params[:pop].each_pair do |key, value|
        @element.properties.create(:name => key, :value => value)
      end
      respond_to do |format|
        format.js {   render( :json => ["OK"] ) }
      end
    else
      respond_to do |format|
        format.js {   render( :json => ["ERROR"] ) }
      end
    end
  end
end
