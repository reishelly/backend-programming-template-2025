const booksService = require('./books-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBooks(request, response, next) {
  try {
    const books = await booksService.getBooks();

    return response.status(200).json(books);
  } catch (error) {
    return next(error);
  }
}

async function createBook(request, response, next) {
  try {
    const { title } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    const book = await booksService.create(title);

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

async function getBookById(request, response, next) {
  try {
    const { id } = request.params;
    const book = await booksService.getBookById(id);

    if (!book) {
      throw errorResponder(errorTypes.NOT_FOUND, "Book not found");
    }

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

async function updateBook(request, response, next) {
  try {
    const { id } = request.params;
    const { title } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Title is required");
    }

    const updatedBook = await booksService.updateBook(id, title);
    return response.status(200).json(updatedBook);
  } catch (error) {
    return next(error);
  }
}

async function deleteBook(request, response, next) {
  try {
    const { id } = request.params;
    await booksService.deleteBook(id);
    return response.status(204).send(); // No content on successful deletion
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook
};
