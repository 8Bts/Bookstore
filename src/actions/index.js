const Actions = (() => {
  const createBook = (book) => ({
    type: 'CREATE_BOOK',
    book,
  });

  const removeBook = (bookId) => ({
    type: 'REMOVE_BOOK',
    bookId,
  });

  return { createBook, removeBook };
})();

export default Actions;
