const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead || false;

    // Method to toggle read status
    this.toggleReadStatus = function() {
        this.isRead = !this.isRead;
        return this.isRead;
    }
}

function addBookToLibrary() {
    
}