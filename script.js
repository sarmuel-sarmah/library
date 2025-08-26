const myLibrary = []; // Array to store the books

class Book {
    constructor(title, author, pages, category, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.category = category;
        this.isRead = isRead; 
    }

    toggleReadStatus() {
        this.isRead != this.isRead;
    }
};

function addBookToLibrary(title, author, pages, category, isRead="false") {
    const book = new Book (
        title,
        author,
        pages,
        category,
        isRead
    )
    myLibrary.push(book);
    return book;
}

addBookToLibrary("To Kill a Mockingbird", "Haper lee", 700, "history", true);
addBookToLibrary("The Seven Husbands of Evelyn Hugo", "Taylor Jenkins", 500, "Fiction", true);
addBookToLibrary("The Alcheimist", "Paulo Coelho", 135, "Fiction", false);
addBookToLibrary("The Fault in Our Stars", "John Green", 400, "Astronomy", false);
addBookToLibrary("The Book Thief", "Markus Zusak", 545, "Fiction", true);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 605, "Literature", true);
addBookToLibrary("The Midnight Library", "Matt Haig", 440, "Relationships", false);
addBookToLibrary("The Perks of Being a Wallflower", "Stephan Chbosky", 811, "Literature", true);
addBookToLibrary("The da Vinci code", "Dan Brown", 434, "Philosophy", false);
addBookToLibrary("Harry Potter and the philosopher's stone", "J. K. Rowling", 699, "Fiction", true);
addBookToLibrary("A little Life", "Hanya Yanagiraha", 239, "Relationships", false);
addBookToLibrary("The Kite Runner", "Khaled Hosseini", 594, "Literature", true);
addBookToLibrary("What if?: Serious scientific Answers to Absurd Hypothetical Questions", "Randall Munroe", 565, "science", false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 1000, "Relationships", true);
addBookToLibrary("Twilight", "Stephenie Meyer", 480, "Fiction");

function displayBooks(){
    // Select the div where the items will be displayed
    const bookList = document.getElementById('booklist');

    // Loop through each item and append it to the div
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const category = document.createElement('p');
        category.textContent = `Category: ${book.category}`;

        const isRead = document.createElement('p');
        isRead.textContent = ` Read: ${book.isRead ? `Yes` : 'No'}`;

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle Read';
        toggleBtn.addEventListener('click', (e) => {
            const bookId = e.target.parentElement.getAttribute("book.id");
            if (bookId) {
                bookId.toggleReadStatus();
                displayBooks()
            }
        })             

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(category);
        bookDiv.appendChild(isRead);
        bookDiv.appendChild(toggleBtn)

        //Append the book div to the booklist div
        bookList.appendChild(bookDiv);
    });
}

const newBookBtn = document.getElementById('newBookBtn');
const modal = document.getElementById('bookModal');
const closeBtn = document.querySelector('.close');
const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

// Open modal when button is clicked
newBookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    };
});

// Handle form submission
bookForm.addEventListener('submit', (e) => {
    bookList.innerHTML = '';

    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const category = document.getElementById('category');
    const isRead = document.getElementById('isRead').checked;

    addBookToLibrary(title, author, pages, category, isRead);
    
    // Reset and close form
    bookForm.reset();
    modal.style.display = 'none';

    // Update book display
    displayBooks();
});

displayBooks()
console.log(myLibrary.length)
console.log(myLibrary)