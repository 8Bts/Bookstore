const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <select>
        {CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
      <label htmlFor="bookTitle">
        Title:
        <input id="bookTitle" type="text" />
      </label>
    </form>
  );
};

export default BooksForm;
