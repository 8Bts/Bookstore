import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <li className="book-item list-group-item d-flex">
    <div className="book-item-left">
      <div className="book-content">
        <span className="book-category">{book.category}</span>
        <h2 className="book-title">{book.title}</h2>
        <span className="book-link border-end-1">Comments</span>
        <span className="pipe" />
        <button type="button" onClick={() => handleRemoveBook(book.id)} className="btn book-link">Remove</button>
        <span className="pipe" />
        <span className="book-link">Edit</span>
      </div>
    </div>
    <div className="book-item-right">
      <div className="progress-cont">
        <div className="oval" />
        <span className="percent">
          100%
          <span className="percent-sub">Completed</span>
        </span>
      </div>
      <span className="pipe-2" />
      <div className="chapter-cont">
        <span className="ch-label">CURRENT CHAPTER</span>
        <span className="current-ch">
          {`Chapter ${Math.round(Math.random() * 100)}`}
        </span>
        <button type="button" className="update-btn mt-3">UPDATE PROGRESS</button>
      </div>
    </div>
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
