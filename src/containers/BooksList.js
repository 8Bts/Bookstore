import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import Actions from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (bookId) => {
    removeBook(bookId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>{}</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  removeBook: Actions.removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
