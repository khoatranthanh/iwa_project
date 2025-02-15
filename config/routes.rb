Rails.application.routes.draw do
  devise_for :users, only: []

  root 'dashboard#index'

  namespace :api do
    namespace :v1 do
      post 'login', to: 'auth#login'
      post 'logout', to: 'auth#logout'
      resources :users, only: [:index, :create, :show, :update, :destroy] do
        collection do
          get :roles
        end
        member do
          resources :answers, only: :create
        end
      end
      resources :tests, only: [:index, :create, :show, :update, :destroy]
    end
  end

  get '*page', to: 'dashboard#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
