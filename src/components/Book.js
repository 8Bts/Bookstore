import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(book.id)}>Delete</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
