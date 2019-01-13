# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating books"

Book.find_or_create_by(name: 'The Lord of the Rings', rating: 4)
Book.find_or_create_by(name: 'The Game of Thrones', rating: 3)
Book.find_or_create_by(name: 'Steve Jobs', rating: 2)
Book.find_or_create_by(name: 'The Ruby on Rails', rating: 5)
Book.find_or_create_by(name: 'The Java Programming', rating: 2)
Book.find_or_create_by(name: 'CSS Essentials', rating: 2)
Book.find_or_create_by(name: 'Programming to Know', rating: 3)
Book.find_or_create_by(name: 'Handbook of Stimulus', rating: 5)
Book.find_or_create_by(name: 'From Beginner to Advance Angular', rating: 1)
Book.find_or_create_by(name: 'Golden Child', rating: 4)
