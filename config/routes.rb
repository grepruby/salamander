Rails3BootstrapDeviseCancan::Application.routes.draw do

  resources :pages do
    resources :elements do
      resources :properties
    end
  end

  post 'pages/:id/create_element' => "elements#create_element", :as => :create_element
  post 'pages/:id/destroy_each' => "elements#destroy_each", :as => :destroy_each

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

   # Feel free to change '/admin' to any namespace you need.
  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users
end
