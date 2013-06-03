Rails3BootstrapDeviseCancan::Application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

   # Feel free to change '/admin' to any namespace you need.
  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users
end
