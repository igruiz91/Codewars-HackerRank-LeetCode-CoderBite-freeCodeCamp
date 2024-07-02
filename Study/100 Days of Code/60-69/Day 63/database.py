import sqlite3
import os


db_name = "books-collection.db"
db_route = os.path.join(os.path.dirname(__file__), db_name)

db = sqlite3.connect(db_route)
cursor = db.cursor()

# cursor.execute(
#     "CREATE TABLE books (id INTEGER PRIMARY KEY, title varchar(250) NOT NULL UNIQUE, author varchar(250) NOT NULL, rating FLOAT NOT NULL)"
# )


all_books = [
    {"title": "To Kill a Mockingbird", "author": "Harper Lee", "rating": 4.8},
    {"title": "1984", "author": "George Orwell", "rating": 4.6},
    {"title": "Pride and Prejudice", "author": "Jane Austen", "rating": 4.7},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "rating": 4.5},
    {"title": "Moby-Dick", "author": "Herman Melville", "rating": 4.2},
    {"title": "War and Peace", "author": "Leo Tolstoy", "rating": 4.4},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "rating": 4.3},
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "rating": 4.8},
    {"title": "Fahrenheit 451", "author": "Ray Bradbury", "rating": 4.6},
    {"title": "Jane Eyre", "author": "Charlotte Brontë", "rating": 4.7},
]

cursor.execute(
    "INSERT INTO books VALUES(2, 'To Kill a Mockingbird', 'Harper Lee', '9.8')"
)

db.commit()
