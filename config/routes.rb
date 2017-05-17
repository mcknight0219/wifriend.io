Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  
end
