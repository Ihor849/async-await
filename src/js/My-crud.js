const BASE_URL = 'http://localhost';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();

  return newBook;
  //   fetch(`${BASE_URL}/books`, options).then(res => res.json);
}

async function addBookAndUpdateUI() {
  try {
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addBookAndUpdateUI();

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();
  return books;
}

async function fetchBooksById() {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();
  return book;
}

async function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const respons = await fetch(url, options);
  const book = await respons.json();
  return book;
}

async function updateBookById(update, options) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();
  return book;
}
