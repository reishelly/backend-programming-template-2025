const { Books } = require('../../../models');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

async function getBookById(id) {
  return booksRepository.getBookById(id);
}
async function updateBook(id, title) {
  return Books.findByIdAndUpdate(id, { title }, { new: true });
}

async function deleteBook(id) {
  return Books.findByIdAndDelete(id);
}

module.exports = {
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};

