Rails3BootstrapDeviseCancan::Application.routes.draw do

  resources :pages do
    resources :elements do
      resources :properties
    end
  end

  get 'edit_elements/:id' => "elements#edit", :as => :element
  put 'edit_elements/:id' => "elements#edit", :as => :element
  post 'pages/:id/create_element' => "elements#create_element", :as => :create_element
  post 'pages/:id/destroy_each' => "elements#destroy_each", :as => :destroy_each
  get 'admin_pages' => "pages#admin_pages", :as => :admin_pages
  get 'pages/:id/element_list' => "pages#element_list", :as => :element_list

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

   # Feel free to change '/admin' to any namespace you need.
  authenticated :user do
    root :to => 'pages#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users
end
