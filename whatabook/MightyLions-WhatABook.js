/**
 * Title: MightyLions-WhatABook.js
 * Author: Mighty Lions
 * Date: 03/03/2024
 * Modified by: Zadkiel and Brock
 * Description: Testing queries for database WhatABook
 * References:
 *      https://github.com/Zadkiel26/web-335/blob/main/week-5/RodriguezAlvarado-Projections.js
 *      https://github.com/Zadkiel26/web-335/blob/main/week-6/RodriguezAlvarado-AggregateQueries.js
 */

// MongoShell connection string
// mongosh "mongodb+srv://whatabook.u3m1hss.mongodb.net/WhatABook" --apiVersion 1 --username whatabook_user
// password: s3cret

// Load the Shell Script
load("MongoDBShellScript.js");

// Write a query to display a list of books.
db.books.find({});

// Write a query to display a list of books by genre.
db.books.find({ genre: "fantasy" });

// Write a query to display a list of book by author.
db.books.find({ author: "Suzanne Collins" });

// Write a query to display a book by bookId.
db.books.find({ bookId: "45735" });