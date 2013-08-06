class ElementsController < ApplicationController
  layout false
  protect_from_forgery :except => [:create_element, :destroy_each]

  def create_element
    page = current_user.pages.find(params[:id])
    @element = page.elements.new(:name => params[:type])
    if @element.save!
      params[:pop].each_pair do |key, value|
        @element.properties.create(:name => key, :value => value)
      end
      @element.properties.create(:name => 'parent', :value => params[:parent])
      respond_to do |format|
        format.js {   render( :json => ["OK"] ) }
      end
    else
      respond_to do |format|
        format.js {   render( :json => ["ERROR"] ) }
      end
    end
  end

  def destroy_each
    page = current_user.pages.find(params[:id])
    page.elements.destroy_all
    render :nothing => true, :status => 200
  end
end
