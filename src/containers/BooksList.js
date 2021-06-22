import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const filteredBooks = books.filter((book) => book.category === filter || filter === 'ALL');

  const handleRemoveBook = (bookId) => {
    if (filteredBooks.length === 1) changeFilter('ALL');
    removeBook(bookId);
  };

  const handleFilterChange = (category) => {
    changeFilter(category);
  };

  return (
    <div>
      <CategoryFilter books={books} filter={filter} handleFilterChange={handleFilterChange} />
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
          {
              filteredBooks.map((book) => (
                <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
