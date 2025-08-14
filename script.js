const myLibrary = [];

class Book {
    constructor(title, author, pages, category) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.category = category;
    }
}

function addBookToLibrary(title, author, pages, category) {
    const book = new Book(title, author, pages, category)
    myLibrary.push(book);
}
console.log(myLibrary)

addBookToLibrary("To Kill a Mockingbird", "Haper lee", 700, "history");
addBookToLibrary("The Seven Husbands of Evelyn Hugo", "Taylor Jenkins", 500, "Fiction");
addBookToLibrary("The Alcheimist", "Paulo Coelho", 135, "Fiction");
addBookToLibrary("The Fault in Our Stars", "John Green", 400, "Astronomy");
addBookToLibrary("The Book Thief", "Markus Zusak", 545, "Fiction");
addBookToLibrary("The Hunger Games", "Suzanne Collins", 605, "Literature");
addBookToLibrary("The Midnight Library", "Matt Haig", 440, "Relationships");
addBookToLibrary("The Perks of Being a Wallflower", "Stephan Chbosky", 811, "Literature");
addBookToLibrary("The da Vinci code", "Dan Brown", 434, "Philosophy");
addBookToLibrary("Harry Potter and the philosopher's stone", "J. K. Rowling", 699, "Fiction");
addBookToLibrary("A little Life", "Hanya Yanagiraha", 239, "Relationships");
addBookToLibrary("The Kite Runner", "Khaled Hosseini", 594, "Literature");
addBookToLibrary("What if?: Serious scientific ANswers to Absurd Hypothetical Questions", "Randall Munroe", 565, "science");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 1000, "Relationships");
addBookToLibrary("Twilight", "Stephenie Meyer", 480, "Fiction");

