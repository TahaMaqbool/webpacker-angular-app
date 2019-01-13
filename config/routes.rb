Rails.application.routes.draw do
  root 'hello_angular#index'
  get 'hello_angular/index'
  get 'hello_angular/name'

  get 'books', to: 'books#index'
  get 'books/list', to: 'books#list'
  put 'books/:id/update_ratings', to: 'books#update_ratings'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
