const booksRepository = require('./books-repository');

async function getBooks() {
  return booksRepository.getBooks();
}

async function create(title) {
  return booksRepository.create(title);
}

async function getBookById(id) {
  return booksRepository.getBookById(id);
}

async function updateBook(id, title) {
  return booksRepository.updateBook(id, title);
}

async function deleteBook(id) {
  return booksRepository.deleteBook(id);
}

module.exports = {
  getBookById,
  updateBook,
  deleteBook,
};

