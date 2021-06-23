export const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = (bookId) => ({
  type: 'REMOVE_BOOK',
  bookId,
});

export const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});
