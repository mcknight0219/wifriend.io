Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  get 'home/index'

  namespace :api do
    namespace :v1 do
      resources :posts
      resources :images
      post 'auth_user' => 'authentication#authenticate_user'
      get 'mobileconfig' => 'mobileconfig#create'
    end
  end
  
end
