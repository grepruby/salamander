class PagesController < ApplicationController
  before_filter :authenticate_user!, :except => :show
  layout false, :only => :show
  # GET /pages
  # GET /pages.json
  def index
    @pages = current_user.pages
    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
    @page = Page.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /pages/new
  # GET /pages/new.json
  def new
    @page = Page.new
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @page }
    end
  end

  # GET /pages/1/edit
  def edit
    @page = current_user.pages.find(params[:id])
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = current_user.pages.new(params[:page])

    respond_to do |format|
      if @page.save
        format.html { redirect_to page_path(@page), notice: 'Page was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /pages/1
  # PUT /pages/1.json
  def update
    @page = current_user.pages.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page])
        format.html { redirect_to pages_url, notice: 'Page was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page = current_user.pages.find(params[:id])
    @page.destroy

    respond_to do |format|
      format.html { redirect_to pages_url, notice: 'Page was successfully deleted.' }
    end
  end
end
