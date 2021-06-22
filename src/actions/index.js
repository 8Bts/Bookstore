const Actions = (() => {
  const createBook = (book) => ({
    type: 'CREATE_BOOK',
    book,
  });

  const removeBook = (bookId) => ({
    type: 'REMOVE_BOOK',
    bookId,
  });

  const changeFiler = (category) => ({
    type: 'CHANGE_FILTER',
    category,
  });

  return { createBook, removeBook, changeFiler };
})();

export default Actions;
