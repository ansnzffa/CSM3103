function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
}

Book.prototype.price = 5.00;
var myBook = new Book("A sad girl", "Lisa");

console.log("Book Name: " + myBook.bookName);
console.log("Author Name: " + myBook.authorName);
console.log("Price: $" + myBook.price.toFixed(2));