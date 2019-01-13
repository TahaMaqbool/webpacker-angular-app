class BooksController < ApplicationController

  before_action :get_books, only: :list
  before_action :get_book, only: :update_ratings
  skip_before_action :verify_authenticity_token, only: [:update_ratings]

  def list
    render json: {books: @books}
  end

  def update_ratings
    @book.update(rating: params[:rating])
    render json: {book: @book}, status: :ok
  end


  private

  def get_books
    @books = Book.all
  end

  def get_book
    @book = Book.find(params[:id])
  end
end
