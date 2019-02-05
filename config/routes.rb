Rails.application.routes.draw do


  scope '/api' do
    resources :destinations do
      resources :comments
    end
  end
end
