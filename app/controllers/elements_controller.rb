class ElementsController < ApplicationController
  layout false, :except => :edit
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

  def destroy
    page = current_user.has_role?('admin') ? Page.find(params[:page_id]) : current_user.pages.find(params[:id])
    page.elements.find(params[:id]).destroy
    redirect_to element_list_path(params[:page_id])
  end

  def edit
    if request.get?
      @page = current_user.has_role?('admin') ? Page.find(params[:page_id]) : current_user.pages.find(params[:id])
      @element = @page.elements.find(params[:id])
    else
      @element = Element.find(params[:id])
      @element.update_attributes(params[:element])
      @element.properties.each do |property|
        property.destroy if property.name.blank? || property.value.blank?
      end
      redirect_to element_list_path(@element.page)
    end
  end
end
