''' Author: Brock Hemsouvanh and Zadkiel Rodriguez
    Date: 2024-03-08
    whatabook_app.py Description: Console for fictional client, WhatABook Company, which allows
    their users to utilize their book database with the following qualities in mind:
    Display all books available in the store.
    Display books filtered by genre, with the user being able to select a genre and see the corresponding books.
    Display books filtered by author.
    Search for a specific book by its bookId.
    Show a customer's wishlist by their customerId.
    Allow a customer to add books to their wishlist.
    Allow a customer to remove books from their wishlist.
    etc...
'''

from pymongo import MongoClient

# Connect to the MongoDB database
client = MongoClient('mongodb+srv://whatabook_user:s3cret@whatabook.u3m1hss.mongodb.net/WhatABook')
db = client['WhatABook']

# Functions for database operations
# Display all books
def show_all_books():
    counter = 1
    for book in db.books.find({}):
        print(f"{counter}. \tTitle: {book['title']} \n\tAuthor: {book['author']} \n\tGenre: {book['genre']}")
        counter += 1
    input("\nPress enter to return to the main menu...")

# Display books by genre
def show_books_by_genre():
    choice = input(f"\nPlease select between: \n\t1. fantasy books \n\t2. drama books \nEnter number: ")
    if choice == '1':
        print("\nFantasy Books:")
        display_books('genre', 'fantasy')
        input("\nPress enter to return to the main menu...")
    elif choice == '2':
        print("\nDrama Books:")
        display_books('genre', 'drama')
        input("\nPress enter to return to the main menu...")

# Display books by author
def show_books_by_author():
    choice = input(f"\nPlease select between: \n\t1. J. K. Rowling \n\t2. Suzanne Collins \nEnter number: ")
    if choice == '1':
        print("\nBooks by author J. K. Rowling:")
        display_books('author', 'J. K. Rowling')
        input("\nPress enter to return to the main menu...")
    elif choice == '2':
        print("\nBooks by author Suzanne Collins:")
        display_books('author', 'Suzanne Collins')
        input("\nPress enter to return to the main menu...")

# Display customer'' wishlist
def show_customer_wishlist():
    counter = 1
    id = input("\nEnter customer id: ")
    customer = db.customers.find_one({ 'customerId': id })
    if customer:
        print(f"\nThis are {customer['firstName']}'s wishlist books:")
        for book in customer['wishlist']:
            print(f"{counter}. \tTitle: {book['title']} \n\tAuthor: {book['author']} \n\tGenre: {book['genre']}")
            counter += 1
        input("\nPress enter to return to the menu...")
    else:
        input("\nInvalid customer id...Press enter to return to main menu")


# Helper functions
def display_books(type, value):
    counter = 1
    for book in db.books.find({ type: value }):
        print(f"{counter}. Title: {book['title']}")
        counter += 1

# Main menu function
def main_menu():
    while True:
        print("\nWhatABook Menu")
        print("1. Display all books")
        print("2. Display books by genre")
        print("3. Display books by author")
        print("4. Display a customer's wishlist")
        print("5. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            show_all_books()
        elif choice == '2':
            show_books_by_genre()
        elif choice == '3':
            show_books_by_author()
        elif choice == '4':
            show_customer_wishlist()
        elif choice == '5':
            print("Thank you for using WhatABook. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

# Run the main menu
if __name__ == '__main__':
    main_menu()
