let books = [];

function addbook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert("Please Fill in all fields correctly before proceeding further");
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>Pages Number: </strong>${book.pagesNumber}</p>`
    );

    document.getElementById('books').innerHTML = booksDiv.join('');

}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
