const myLibrary = [];

class Book {
    constructor(title, author, pages, category) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.category = category;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("To Kill a Mockingbird", "Haper lee", 700, "history");
const book2 = new Book("The Seven Husbands of Evelyn Hugo", "Taylor Jenkins", 500, "Fiction");
const book3 = new Book("The Alcheimist", "Paulo Coelho", 135, "Fiction");
const book4 = new Book("The Fault in Our Stars", "John Green", 400, "Astronomy");
const book5 = new Book("The Book Thief", "Markus Zusak", 545, "Fiction");
const book6 = new Book("The Hunger Games", "Suzanne Collins", 605, "Literature");
const book7 = new Book("The Midnight Library", "Matt Haig", 440, "Relationships");
const book8 = new Book("The Perks of Being a Wallflower", "Stephan Chbosky", 811, "Literature");
const book9 = new Book("The da Vinci code", "Dan Brown", 434, "Philosophy");
const book10 = new Book("Harry Potter and the philosopher's stone", "J. K. Rowling", 699, "Fiction");
const book11 = new Book("A little Life", "Hanya Yanagiraha", 239, "Relationships");
const book12 = new Book("The Kite Runner", "Khaled Hosseini", 594, "Literature");
const book13 = new Book("What if?: Serious scientific ANswers to Absurd Hypothetical Questions", "Randall Munroe", 565, "science");
const book14 = new Book("Pride and Prejudice", "Jane Austen", 1000, "Relationships");
const book15 = new Book("Twilight", "Stephenie Meyer", 480, "Fiction");