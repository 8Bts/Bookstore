import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <li className="list-group-item d-flex">
    <div className="book-content">
      <span className="book-category">{book.category}</span>
      <h2>{book.title}</h2>
      <span className="book-link pe-4 border-end-1">Comments</span>
      <span className="book-link px-4">Remove</span>
      <span className="book-link px-4">Edit</span>
    </div>
    <div className="progress-cont">
      <div className="oval">0</div>
      <span className="p-%">10%</span>
    </div>
    <div className="chapter-cont">
      <span className="ch-label">Current Chapter</span>
      <span className="current-ch">
        {`Chapter ${Math.round(Math.random() * 100)}`}
      </span>
    </div>
    <button type="button" onClick={() => handleRemoveBook(book.id)}>Delete</button>
  </li>
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
