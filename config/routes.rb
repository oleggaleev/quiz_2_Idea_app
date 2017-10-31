Rails.application.routes.draw do
  resources :ideas
  resources :users, only: [:new, :create]
  resource :session

  resources :ideas do
    resources :reviews, shallow: true, only: [:create, :destroy]
  end
  
  root 'home#index'
end
