class BooksController < ApplicationController
  def index
    name = %w[Steve Life Rocks].sample
    render json: { name: name }
  end
end
