/**
 * Title: MongoDBShellScript.js
 * Author: Mighty Lions
 * Date: 03/01/2024
 * Modified by: Zadkiel and Brock
 * Description: MongoDB Shell Script for books and customer collections
 * References:
 *      https://github.com/Zadkiel26/web-335/blob/main/week-6/houses.js
 */

// Books data
const book1 = {
    "bookId": "37492",
    "title": "Harry Potter and the Philosopher's Stone",
    "genre": "fantasy",
    "author": "J. K. Rowling"
}

const book2 = {
    "bookId": "81635",
    "title": "Harry Potter and the Prisoner of Azkaban",
    "genre": "fantasy",
    "author": "J. K. Rowling"
}

const book3 = {
    "bookId": "20947",
    "title": "The Hunger Games: Catching Fire",
    "genre": "drama",
    "author": "Suzanne Collins"
}

const book4 = {
    "bookId": "45735",
    "title": "The Hunger Games: Mockingjay - Part 1",
    "genre": "drama",
    "author": "Suzanne Collins"
}

// Customer data
const harry = {
    "customerId": "c1000",
    "firstName": "Harry",
    "lastName": "Potter",
    "wishlist": [
        {
            "bookId": "37492",
            "title": "Harry Potter and the Philosopher's Stone",
            "genre": "fantasy",
            "author": "J. K. Rowling"
        },
        {
            "bookId": "81635",
            "title": "Harry Potter and the Prisoner of Azkaban",
            "genre": "fantasy",
            "author": "J. K. Rowling"
        }
    ]
}

const jennifer = {
    "customerId": "c1001",
    "firstName": "Jennifer",
    "lastName": "Lawrence",
    "wishlist": [
        {
            "bookId": "20947",
            "title": "The Hunger Games: Catching Fire",
            "genre": "drama",
            "author": "Suzanne Collins"
        },
        {
            "bookId": "45735",
            "title": "The Hunger Games: Mockingjay - Part 1",
            "genre": "drama",
            "author": "Suzanne Collins"
        }
    ]
}

const john = {
    "customerId": "c1002",
    "firstName": "John",
    "lastName": "Doe",
    "wishlist": [
        {
            "bookId": "81635",
            "title": "Harry Potter and the Prisoner of Azkaban",
            "genre": "fantasy",
            "author": "J. K. Rowling"
        },
        {
            "bookId": "20947",
            "title": "The Hunger Games: Catching Fire",
            "genre": "drama",
            "author": "Suzanne Collins"
        },
        {
            "bookId": "45735",
            "title": "The Hunger Games: Mockingjay - Part 1",
            "genre": "drama",
            "author": "Suzanne Collins"
        }
    ]
}

// Delete existing collections
console.log("Deleting existing collections...");
db.books.drop();
db.customers.drop();
console.log("All collections deleted!");

// Create the books collection using Document Validation
console.log("Creating the books collection...");
db.createCollection("books", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                bookId: {
                    bsonType: "string"
                },
                title: {
                    bsonType: "string"
                },
                genre: {
                    bsonType: "string"
                },
                author: {
                    bsonType: "string"
                }
            }
        }
    }
});
console.log("Books collection created.");

// Create the customers collection using Document Validation
console.log("Creating the customer collection...");
db.createCollection("customers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                customerId: {
                    bsonType: "string"
                },
                firstName: {
                    bsonType: "string"
                },
                lastName: {
                    bsonType: "string"
                },
                wishlist: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            bookId: {
                                bsonType: "string"
                            },
                            title: {
                                bsonType: "string"
                            },
                            genre: {
                                bsonType: "string"
                            },
                            author: {
                                bsonType: "string"
                            }
                        }
                    }
                }
            }
        }
    }
});
console.log("Customer collection created.");

// Insert the documents into the collection
console.log("Inserting book documents...");
db.books.insertOne(book1);
db.books.insertOne(book2);
db.books.insertOne(book3);
db.books.insertOne(book4);
console.log("All books have been inserted.");
console.log("Inserting the customer documents...");
db.customers.insertOne(harry);
db.customers.insertOne(jennifer);
db.customers.insertOne(john);
console.log("All customers have been inserted.");